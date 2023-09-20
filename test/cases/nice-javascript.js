/**
 * Generates a SHA256 hash of the content.
 */
export const sha256 = async (/** @type {string} */ message) => {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await globalThis.crypto.subtle.digest('SHA-256', msgUint8); // hash the message
  const bytes = new Uint8Array(hashBuffer);
  const len = bytes.byteLength;
  let binary = '';
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  /* istanbul ignore next because we have some very good reason to */
  return globalThis.btoa(binary);
};
