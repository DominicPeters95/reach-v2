import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private route: Router){}

  onClick(subtype: string){
    if(subtype === "fill_in") this.route.navigate(['fill_in/presentation']);
    if(subtype === "build_sentence") this.route.navigate(['build_senetence/presentation']);
    // if(subtype === "")this.route.navigate(['']);
    // if(subtype === "")this.route.navigate(['']);
    
  }

}
