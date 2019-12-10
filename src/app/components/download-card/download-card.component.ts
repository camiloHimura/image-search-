import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.scss']
})
export class DownloadCardComponent implements OnInit {
  @Input('url') url: string;

  constructor() { }

  ngOnInit() {
  }

}
