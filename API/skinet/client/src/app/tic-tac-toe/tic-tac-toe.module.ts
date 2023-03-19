import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToeComponent } from './tic-tac-toe.component';



@NgModule({
  declarations: [
    TicTacToeComponent,
    SquareComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule,
  ],
  providers: [],
})
export class TicTacToeModule { }
