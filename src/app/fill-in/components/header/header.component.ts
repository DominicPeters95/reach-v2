import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input() isPresent: boolean = false;
  @Input() title: string = "";
  
  constructor(private route: Router){}

  ngOnInit(): void {
    
  }


  goToPresentation(nav: boolean){
    this.route.navigate(["presentation"]);
  }

  close(){
    this.route.navigate([""]);
  }
}
