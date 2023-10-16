import crypto from 'crypto'


const secretKey = crypto
  .createHash('sha512')
  .update(process.env.SECRET_KEY)
  .digest('hex')
  .substring(0, 32)

const encryptionMethod = 'aes-256-ctr'

/**
 * Encrypts the given data using a secret key and initialization vector (IV).
 *
 * @param {string} data - The data to encrypt.
 * @returns {{ iv: string, encryptedText: string }} An object containing the initialization vector (IV) and the encrypted text.
 */
export const encryptSnippet = (data) => {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(encryptionMethod, secretKey, iv)

  return {
    iv: iv.toString('hex'),
    encryptedText: Buffer.from(
      cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
    ).toString()
  }
}

/**
 * Decrypts the given data using the provided initialization vector (iv).
 *
 * @param {string} data - The data to be decrypted.
 * @param {Buffer} iv - The initialization vector to be used for decryption.
 * @returns {string} The decrypted data.
 */
export const decryptSnippet = (data, iv) => {
  const decipher = crypto.createDecipheriv(
    encryptionMethod,
    secretKey,
    Buffer.from(iv, 'hex')
  )

  return Buffer.from(
    decipher.update(data, 'hex') + decipher.final()
  ).toString('utf8')
}
