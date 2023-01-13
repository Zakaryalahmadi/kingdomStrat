import Player from "./Player";

export interface IGameState {
    board: any;
    players: Player[];
    turn: number;
    select: any;
}

export const defaultGameState = () => ({
    select: false,
    board: [
      [false,false,false,false],
      [false,false,false,false],
      [false,false,false,false],
      [false,false,false,false]
    ],
    players: [
      new Player('white'),
      new Player('black')
    ],
    turn: 0,
});
  