import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // Never change the original state. Create new one instead.
    return [ action.payload.data, ...state ]; //state.concate([action.payload.data])
  }

  return state;
}
