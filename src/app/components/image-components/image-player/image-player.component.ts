import { Component } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-player',
  standalone: true,
  imports: [CommonModule, ImageViewerComponent],
  templateUrl: './image-player.component.html',
  styleUrls: ['./image-player.component.scss']
})
export class ImagePlayerComponent {
  images: String[] = ["https://www.loveyourdog.com/wp-content/uploads/2020/06/Golden-Retriever-and-Husky-Playing-in-Leaves.jpg", "https://c8.alamy.com/comp/2DW1MW1/adorable-golden-retriever-and-husky-dog-playing-in-the-park-2DW1MW1.jpg", "https://wallpapers.com/images/hd/golden-retriever-husky-puppy-basket-ytvi8abslw0m7i35.jpg"];
  url?: String
  showImageViewer(url: String) {
    this.url = url;
  }
}
