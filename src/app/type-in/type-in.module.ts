import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiPresentationComponent } from './pages/ti-presentation/ti-presentation.component';
import { TiDirectionsComponent } from './pages/ti-directions/ti-directions.component';
import { TypeInContentComponent } from './pages/type-in-content/type-in-content.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HeaderComponent } from './components/header/header.component';
import { TypeInAnswerComponent } from './components/type-in-answer/type-in-answer.component';
import { TypeInQuestionComponent } from './components/type-in-question/type-in-question.component';
import { DynamicHooksModule } from 'ngx-dynamic-hooks';

@NgModule({
  declarations: [
    TiPresentationComponent,
    TiDirectionsComponent,
    TypeInContentComponent,
    NavigatorComponent,
    HeaderComponent,
    TypeInAnswerComponent,
    TypeInQuestionComponent,
    
  ],
  imports: [
    CommonModule,
    DynamicHooksModule
  ]
})
export class TypeInModule { }
