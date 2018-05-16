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
      action.turn === "X" ? (action.turn = "O") : (action.turn = "X");
      const setBoard = state.board.setIn(action.board, action.turn);
      console.log(winner(setBoard));
      const winnerState = winner(setBoard);
      return {
        board: setBoard,
        turn: action.turn,
        winner: winnerState
      };
    default:
      return state;
  }
}

function winner(board) {
  for (let i = 0; i < 3; i++) {
    if (
      board.get(i) &&
      board.get(i).get(0) === board.get(i).get(1) &&
      board.get(i).get(0) === board.get(i).get(2)
    ) {
      return board.get(i).get(0) + " wins!!";
    } else if (
      board.get(0) &&
      board.get(1) &&
      board.get(2) &&
      board.get(0).get(i) === board.get(1).get(i) &&
      board.get(0).get(i) === board.get(2).get(i)
    ) {
      return board.get(0).get(i) + " wins!!";
    }
  }

  if (
    board.get(0) &&
    board.get(1) &&
    board.get(2) &&
    board.get(0).get(0) === board.get(1).get(1) &&
    board.get(0).get(0) === board.get(2).get(2)
  ) {
    return board.get(1).get(1) + " wins!!";
  } else if (
    board.get(0) &&
    board.get(1) &&
    board.get(2) &&
    board.get(0).get(2) === board.get(1).get(1) &&
    board.get(0).get(2) === board.get(2).get(0)
  ) {
    return board.get(1).get(1) + " wins!!";
  }
}
