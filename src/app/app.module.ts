import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HookParserEntry, DynamicHooksModule } from 'ngx-dynamic-hooks';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CBlankComponent } from './components/c-blank/c-blank.component';
import { QuestionsAreaComponent } from './screens/questions-area/questions-area.component';
import { AnswersAreaComponent } from './screens/answers-area/answers-area.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './screens/presentation/presentation.component';
import { DirectionsComponent } from './screens/directions/directions.component';
import { ContentComponent } from './screens/content/content.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagePlayerComponent } from './components/image-components/image-player/image-player.component';

const componentParsers: Array<HookParserEntry> = [
  { component: CBlankComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CBlankComponent,
    QuestionsAreaComponent,
    AnswersAreaComponent,
    NavigatorComponent,
    HeaderComponent,
    PresentationComponent,
    DirectionsComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers,
    }),
    BrowserAnimationsModule,
    ImagePlayerComponent,
    AudioPlayerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
