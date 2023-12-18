import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationItem } from 'src/app/models/model';
import { TypeInService } from 'src/app/services/type-in.service';

@Component({
  selector: 'app-ti-directions',
  templateUrl: './ti-directions.component.html',
  styleUrls: ['./ti-directions.component.scss']
})
export class TiDirectionsComponent implements OnInit{
  title: string = "";
  elements: PresentationItem[] = [];

  constructor(private dataService: TypeInService, private route: Router){}

  ngOnInit(): void {
    this.dataService.loadDirections().subscribe((result)=>{
      if(result){
        this.elements = result;
      }
    });
  } 

  mission(){
    this.route.navigate(['type_in_content']);
  }
}
