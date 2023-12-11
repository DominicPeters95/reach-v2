import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HookParserEntry, DynamicHooksModule } from 'ngx-dynamic-hooks';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CBlankComponent } from './c-blank/c-blank.component';
import { QuestionsAreaComponent } from './questions-area/questions-area.component';
import { AnswersAreaComponent } from './answers-area/answers-area.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { DirectionsComponent } from './directions/directions.component';
import { ContentComponent } from './content/content.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AudioPlayerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
