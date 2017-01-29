import { expect } from '../test_helper';
import { SEND_COMMENT } from '../../src/actions/types';
import CommentsReducer from '../../src/reducers/reducer_comments';

describe('commentsReducer', () => {
  it('handles actions with unknown type', () => {
    expect(CommentsReducer(undefined, {})).to.eql([]);
  });

  it('handles actions of SEND_COMMENT type', () => {
    const action = {
      type: SEND_COMMENT,
      payload: 'another interesting comment'
    };
    expect(CommentsReducer([], action)).to.eql([action.payload]);
  });
});
