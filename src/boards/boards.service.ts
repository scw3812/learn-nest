import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { type Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [
    {
      id: '5a0d35a0-7dd3-11ed-9707-f19e78757327',
      title: 'sdfds',
      description: 'fdsfdsf',
      status: BoardStatus.PUBLIC,
    },
  ];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard({ title, description }: CreateBoardDto): Board {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find id: ${id}`);
    }
    return found;
  }

  deleteBoard(id: string): void {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find id: ${id}`);
    }
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
