import { decryptSnippet } from '@/lib/crypt'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  const response = await clientPromise.then(async (client) => {
    const db = client.db()
    const collection = db.collection('snippets')

    const response = collection.findOne({ _id: new ObjectId(id) })

    return response
  })

  let snippet = null

  if (response) {
    if (response.expire.value !== 0 && response.expireAt < new Date()) {
      // Delete the expired snippet
      await clientPromise.then(async (client) => {
        const db = client.db()
        const collection = db.collection('snippets')

        await collection.deleteOne({ _id: new ObjectId(id) })
      })

      snippet = {
        expired: true
      }
    } else {
      snippet = {
        ...response,
        code: decryptSnippet(response.code, response.iv)
      }
    }
  }

  return NextResponse.json(snippet)
}
