import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isPresent: boolean = false;
  @Input() title: string = "";
  
  constructor(private route: Router){}

  ngOnInit(): void {
    
  }


  goToPresentation(nav: boolean){
    this.route.navigate(["type_in/presentation"]);
  }

  close(){
    this.route.navigate([""]);
  }
}
