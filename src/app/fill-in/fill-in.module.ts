import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { FillInQuestionComponent } from './components/fill-in-question/fill-in-question.component';
import { FillInAnswerComponent } from './components/fill-in-answer/fill-in-answer.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HeaderComponent } from './components/header/header.component';
import { FiPresentationComponent } from './pages/fi-presentation/fi-presentation.component';
import { FiDirectionsComponent } from './pages/fi-directions/fi-directions.component';
import { FillInContentComponent } from './pages/fill-in-content/fill-in-content.component';
import { CBlankComponent } from '../common/c-blank/c-blank.component';

// const componentParsers: Array<HookParserEntry> = [
//   {component: CBlankComponent}
// ];


@NgModule({
  declarations: [
    FillInQuestionComponent,
    FillInAnswerComponent,
    NavigatorComponent,
    HeaderComponent,
    FiPresentationComponent,
    FiDirectionsComponent,
    FillInContentComponent,
  ],
  imports: [
    CommonModule,
    DynamicHooksModule
    // .forRoot({
    //   globalParsers: componentParsers, 
    // }),
  ]
})
export class FillInModule { }
