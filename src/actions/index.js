import { SEND_COMMENT } from './types';

export function sendComment(comment) {
  return {
    type: SEND_COMMENT,
    payload: comment
  };
}
