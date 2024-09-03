import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gif-card.component.html'
})
export class GifCardComponent {
  @Input()
  public gif!: Gif;

}
