import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { DirectionsComponent } from './directions/directions.component';
import { QuestionsAreaComponent } from './questions-area/questions-area.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path: "", redirectTo: "/presentation", pathMatch: 'full'},
  {path: "presentation", component: PresentationComponent},
  {path: "directions", component: DirectionsComponent},
  {path: "content", component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
