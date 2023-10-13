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
  const expireDate = new Date(Date.now() + expire * 1000)

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

  return NextResponse.json({
    id: response.insertedId,
  })
}
