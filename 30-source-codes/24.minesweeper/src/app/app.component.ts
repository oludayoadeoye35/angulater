import { Component } from '@angular/core';
import { MinesweeperComponent } from './components/minesweeper/minesweeper.component';

@Component({
  selector: 'app-root',
  imports: [MinesweeperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
