import { expect } from '../test_helper';
import { SEND_COMMENT } from '../../src/actions/types';
import { sendComment } from '../../src/actions';

describe('sendComment', () => {
  it('has the correct type', () => {
    const action = sendComment();
    expect(action.type).to.equal(SEND_COMMENT);
  });

  it('has the correct payload', () => {
    const action = sendComment('comment to save');
    expect(action.payload).to.equal('comment to save');
  });
});
