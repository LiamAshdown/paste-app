import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { createGzip, createGunzip } from 'zlib'

export async function POST(request) {
  const res = await request.json()

  const data = res.code

  // Compress the data
  const compressedData = await new Promise((resolve, reject) => {
    const gzip = createGzip();
    let compressed = Buffer.from('');

    gzip.on('data', (chunk) => {
      compressed = Buffer.concat([compressed, chunk]);
    });

    gzip.on('end', () => {
      resolve(compressed);
    });

    gzip.end(data);
  })

  // Encrypt the compressed data
  const encryptionKey = crypto.scryptSync('test', 'salt', 32);
  const iv = crypto.randomBytes(16); // Initialization Vector

  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv);
  const encryptedData = Buffer.concat([cipher.update(compressedData), cipher.final()]);

  // Encode the encrypted data and create the URL
  const urlSafeData = encodeURIComponent(encryptedData.toString('base64'))
  const url = `https://example.com/paste?data=${urlSafeData}`


  return NextResponse.json({
    url: url
  })
}
