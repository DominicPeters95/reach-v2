import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FillInModule } from './fill-in/fill-in.module';
import { BuildSentenceModule } from './build-sentence/build-sentence.module';
import { CBlankComponent } from './common/c-blank/c-blank.component';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';

const componentParsers: Array<HookParserEntry> = [
  {component: CBlankComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CBlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BuildSentenceModule,
    FillInModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
