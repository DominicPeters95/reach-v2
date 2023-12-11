import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './screens/presentation/presentation.component';
import { DirectionsComponent } from './screens/directions/directions.component';
import { QuestionsAreaComponent } from './screens/questions-area/questions-area.component';
import { ContentComponent } from './screens/content/content.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';

const routes: Routes = [
  { path: "", redirectTo: "/presentation", pathMatch: 'full' },
  { path: "presentation", component: PresentationComponent },
  { path: "directions", component: DirectionsComponent },
  { path: "content", component: ContentComponent },
  { path: "audio", component: AudioPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
