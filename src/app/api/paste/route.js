import { encryptSnippet } from '@/lib/crypt'
import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

/**
 * Handles POST requests to create a new encrypted code snippet.
 * @param {Request} request - The incoming request object.
 * @returns {NextResponse} - The response object containing the encrypted code snippet.
 */
export async function POST(request) {
  const { title, code, expire, language } = await request.json()

  const encrypted = encryptSnippet(code)
  const expireDate = new Date(Date.now() + expire.value * 1000)

  const encryptedCode = {
    title,
    code: encrypted.encryptedText,
    iv: encrypted.iv,
    expire,
    expireAt: expireDate,
    language,
  }

  const response = await clientPromise.then((client) => {
    const db = client.db()
    const collection = db.collection('snippets')
    const response = collection.insertOne(encryptedCode)

    return response
  })

  // Build the URL
  const url = new URL(request.headers.get('referer'))
  url.pathname = `/snippet/${response.insertedId}`

  return NextResponse.json({
    url: url.toString()
  })
}
