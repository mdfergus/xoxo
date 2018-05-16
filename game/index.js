import { Map } from "immutable";

const board = Map();

const MOVE = "MOVE";
export const move = (str, coordArr) => {
     console.log("yo", str, coordArr);
  return {
    type: MOVE,
    turn: str,
    board: coordArr
  };
};

export default function reducer(state = { board, turn: "X" }, action) {
  switch (action.type) {
    case MOVE:
      //const boardSetter = state.board.setIn(state.board, state.turn)
      const boardSetter = state.board.setIn(action.board, action.turn)
      console.log(state, action, boardSetter);
      action.turn === 'X' ? action.turn = 'O' : action.turn = 'X'
      return {board: boardSetter, turn: action.turn};
    default:
      return state;
  }
}
