/**
 * Copies the given text to the clipboard if the browser supports the Clipboard API.
 * @param {string} text - The text to be copied to the clipboard.
 */
export const copyToClipboard = (text) => {
  // Check if we're in production
  if (process.env.NODE_ENV === 'production') {
    // Check if the browser supports the Clipboard API
    if (navigator.clipboard) {
      // Copy the text to the clipboard
      navigator.clipboard.writeText(text)
    }
  }

  // Don't do anything if we're not in production
}
