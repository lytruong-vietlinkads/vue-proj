export function convertByteToMb(byte: number, toFixed: number = 1) {
  return Math.max(0.1, (byte / 1024 ** 2)).toFixed(toFixed);
}

/**
 * This function is same as PHP's nl2br() with default parameters.
 *
 * @param {string} str Input text
 * @param {boolean} replaceMode Use replace instead of insert
 *
 * @return {string} Filtered text
 */
export function nl2br(str: String, replaceMode: Boolean = false, isXhtml: Boolean = false): String {
  let breakTag = (isXhtml) ? '<br />' : '<br>';
  let replaceStr = (replaceMode) ? '$1'+ breakTag : '$1'+ breakTag +'$2';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
}

/**
 * This function is same as PHP's htmlspecialchars() with default parameters.
 *
 * @param {string} str Input text
 *
 * @return {string} Filtered text
 */
export function htmlspecialchars (str: String) {
  var s = str.replace(/&/g, '&amp;');
     s = s.replace(/'/g, "&#039;");
     s = s.replace(/"/g, '&quot;');
     s = s.replace(/</g, '&lt;');
     s = s.replace(/>/g, '&gt;');
  return s;
};
