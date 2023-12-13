import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinchZoomModule } from 'ngx-pinch-zoom-16';

@Component({
  selector: 'image-viewer',
  standalone: true,
  imports: [CommonModule, PinchZoomModule],
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  @Input() url?: String;
  @Output() urlChange = new EventEmitter<any>()
  ngOnInit(): void {
  }
  closeViewer() {
    this.url = undefined
    this.urlChange.emit(this.url);
  }

}
