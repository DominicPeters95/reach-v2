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
import { FormsModule } from '@angular/forms';
import { TypeInModule } from './type-in/type-in.module';
import { CTypeinComponent } from './common/c-typein/c-typein.component';

const componentParsers: Array<HookParserEntry> = [
  {component: CBlankComponent},
  {component: CTypeinComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CBlankComponent,
    CTypeinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FillInModule,
    BuildSentenceModule,
    TypeInModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
