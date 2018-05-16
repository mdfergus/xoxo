import { Map } from "immutable";

const MOVE = "MOVE";

export const move = (str, coordArr) => {
  console.log("yo", str, coordArr);
  return {
    type: MOVE,
    turn: str,
    board: coordArr
  };
};

function boardReducer(board=Map(), action){
    if(action.type === MOVE){
        return board.setIn(action.board, action.turn);
    }
    return board
}

function turnReducer(turn='X', action){
    if(action.type === MOVE){
        return turn === 'X' ? 'O' : 'X'
    }
    return turn
}

export default function reducer(state = {}, action) {
    //console.log(winner(setBoard));
    const nextBoard = boardReducer(state.board, action)
    const winnerState = winner(nextBoard)
    return {
        board: nextBoard,
        turn: turnReducer(state.turn, action),
        winner: winnerState
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
