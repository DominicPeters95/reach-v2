import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { BsPresentationComponent } from './pages/bs-presentation/bs-presentation.component';
import { BsDirectionsComponent } from './pages/bs-directions/bs-directions.component';
import { HeaderComponent } from './components/header/header.component';
import { BuildSentenceContentComponent } from './pages/build-sentence-content/build-sentence-content.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { BuildSentenceQuestionComponent } from './components/build-sentence-question/build-sentence-question.component';
import { BuildSentenceAnswerComponent } from './components/build-sentence-answer/build-sentence-answer.component';
import { CBlankComponent } from '../common/c-blank/c-blank.component';


// const componentParsers: Array<HookParserEntry> = [
//   {component: CBlankComponent}
// ];

@NgModule({
  declarations: [
    HeaderComponent,
    BsDirectionsComponent,
    BsPresentationComponent,
    BuildSentenceContentComponent,
    NavigatorComponent,
    BuildSentenceQuestionComponent,
    BuildSentenceAnswerComponent
  ],
  imports: [
    CommonModule,
    DynamicHooksModule
    // .forRoot({
    //   globalParsers: componentParsers, 
    // }),
  ]
})
export class BuildSentenceModule { }
