import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import type { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }
}
