import { Map } from "immutable";

const board = Map();

const MOVE = "MOVE";
export const move = (str, coordArr) => {
  return {
    type: MOVE,
    turn: str,
    board: coordArr
  };
};

export default function reducer(state = { board, turn: "X" }, action) {
  switch (action.type) {
    case MOVE:
      console.log(state, action);
      return move(
        state.turn,
        state.board //.setIn([board[0], board[1]], state.turn)
      );
    default:
      return state;
  }
}
