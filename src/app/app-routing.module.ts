import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ContentComponent } from './screens/content/content.component';
import { DirectionsComponent } from './screens/directions/directions.component';
import { PresentationComponent } from './screens/presentation/presentation.component';
import { ImageViewerComponent } from './components/image-components/image-viewer/image-viewer.component';
import { ImagePlayerComponent } from './components/image-components/image-player/image-player.component';

const routes: Routes = [
  { path: "", redirectTo: "/image", pathMatch: 'full' },
  { path: "presentation", component: PresentationComponent },
  { path: "directions", component: DirectionsComponent },
  { path: "content", component: ContentComponent },
  { path: "audio", component: AudioPlayerComponent },
  { path: "video", component: VideoPlayerComponent },
  { path: "image", component: ImagePlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
