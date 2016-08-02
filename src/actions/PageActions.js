import { CHANGE_OPACITY } from '../constants/Square'

export function changeOpacity(id, opacity) {
  return {
    type: CHANGE_OPACITY,
    payload: {id: id, opacity: opacity}
  }
}
