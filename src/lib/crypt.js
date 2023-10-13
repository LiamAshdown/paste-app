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
    ).toString('base64')
  }
}

/**
 * Decrypts the encrypted data using the encryption method, secret key, and initialization vector.
 * @param {Object} encryptedData - The encrypted data to be decrypted.
 * @param {string} encryptedData.encryptedText - The encrypted text to be decrypted.
 * @param {string} encryptedData.iv - The initialization vector used for encryption.
 * @returns {string} - The decrypted data in utf8 format.
 */
export const decryptSnippet = (encryptedData) => {
  const buff = Buffer.from(encryptedData.encryptedText, 'base64')
  const decipher = crypto.createDecipheriv(encryptionMethod, secretKey, encryptedData.iv)
  return (
    decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
    decipher.final('utf8')
  )
}
