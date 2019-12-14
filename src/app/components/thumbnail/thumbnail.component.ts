import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  @Input() url: string;
  errorLoading = false;

  constructor() { }

  ngOnInit() {
  }

  loaded(event) {
  }

  loadError(event) {
    this.errorLoading = true;
  }

}
