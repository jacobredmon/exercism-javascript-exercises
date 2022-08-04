/**
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 *
 * @param {string} message
 *
 * @returns {string} response
 */
export const hey = (message) => {
  switch(true) {
    // all upper case, not just whitespace, last digit is ?
    case message.toUpperCase() === message && /[A-Z]\S/.test(message) && /[A-Z]+\?$/g.test(message.trim()):
      return "Calm down, I know what I'm doing!";
      break;
    // last digit is ?
    case /\?$/g.test(message.trim()):
      return "Sure.";
      break;
    // all upper case, at least one letter
    case message.toUpperCase() === message && /[A-Z]\S/.test(message):
      return "Whoa, chill out!";
      break;
    // only whitespace
    case !/[^\s]+/.test(message):
      return "Fine. Be that way!";
      break;
    default:
      return "Whatever.";
  }
};
