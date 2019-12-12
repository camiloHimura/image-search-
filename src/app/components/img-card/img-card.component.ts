import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {
  @Input() image: Image;
  @Output() imageEmitter: EventEmitter<Image> = new EventEmitter<Image>();

  constructor() { }

  ngOnInit() {
  }

  emitCardInfo(image) {
    this.imageEmitter.emit(image);
  }
}
