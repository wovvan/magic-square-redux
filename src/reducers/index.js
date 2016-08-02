import {CHANGE_OPACITY} from '../constants/Square'
import uuid from 'node-uuid';

const initialState = {
  squares: []
}

for (var i = 0; i < 16; i++) {
  initialState.squares.push({
    id: uuid.v4(),
    opacity: 0
  });
}
export default function squares(state = initialState, action) {
  switch (action.type) {
    case CHANGE_OPACITY:
      return {...state,
        squares: state.squares.map((square) => {
          if (square.id === action.payload.id) {
            square.opacity = action.payload.opacity;
          }
          return square;
        })
      }

    default:
      return state;
  }

}
