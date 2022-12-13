import { Injectable } from '@nestjs/common';
import type { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
