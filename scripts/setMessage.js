import { messageElement } from './elements';

export default function (message) {
  messageElement.textContent = message ? `*${message}` : '';
}
