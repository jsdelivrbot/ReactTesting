import { SEND_COMMENT } from '../actions/types';

export default (state=[], action) => {
  
  switch (action.type) {
    case SEND_COMMENT:
      return [ ...state, action.payload ]
    default:
      return state;
  }
};
