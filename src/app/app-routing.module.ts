import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildSentenceContentComponent } from './build-sentence/pages/build-sentence-content/build-sentence-content.component';
import { BsDirectionsComponent } from './build-sentence/pages/bs-directions/bs-directions.component';
import { BsPresentationComponent } from './build-sentence/pages/bs-presentation/bs-presentation.component';
import { FillInContentComponent } from './fill-in/pages/fill-in-content/fill-in-content.component';
import { FiDirectionsComponent } from './fill-in/pages/fi-directions/fi-directions.component';
import { FiPresentationComponent } from './fill-in/pages/fi-presentation/fi-presentation.component';

const routes: Routes = [
  {path: "", component: HomeComponent,},
  {path: "fill_in/presentation", component: FiPresentationComponent},
  {path: "fill_in/directions", component: FiDirectionsComponent},
  {path: "build_senetence/presentation", component: BsPresentationComponent},
  {path: "build_senetence/directions", component: BsDirectionsComponent},
  {path: "fill_in_content", component: FillInContentComponent},
  {path: "build_sentence_content", component: BuildSentenceContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
