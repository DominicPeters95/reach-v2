import { Component, OnInit } from '@angular/core';
import { FillInService } from './services/fill-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'solve';

  // constructor(private dataService: FillInFillInService){this.dataService.loadData();}

}
