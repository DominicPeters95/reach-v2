import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  url: String = ''
  ngOnInit(): void {
    this.url = "https://www.shutterstock.com/shutterstock/videos/1054727690/preview/stock-footage-beautiful-summer-morning-in-the-forest-sun-rays-break-through-the-foliage-of-magnificent-green.mp4"
  }

}
