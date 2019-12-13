import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download-card',
  templateUrl: './download-card.component.html',
  styleUrls: ['./download-card.component.scss']
})
export class DownloadCardComponent implements OnInit {
  @Input() url: string;
  @Input() downloadUrl: string;

  constructor() { }

  ngOnInit() {
  }

  downloadImage(downloadUrl) {
    const temporalLink = document.createElement('a');
    temporalLink.href = `${downloadUrl}?force=true`;
    temporalLink.download = 'true';
    document.body.appendChild(temporalLink);
    temporalLink.click();
    setTimeout(() => document.body.removeChild(temporalLink) , 0);
}

}
