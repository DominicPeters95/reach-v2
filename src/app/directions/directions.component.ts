import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { PresentationItem } from '../modules/module';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit{
  
  title: string = "";
  elements: PresentationItem[] = [];

  constructor(private dataService: DataService, private route: Router){}

  ngOnInit(): void {
    this.dataService.loadDirections().subscribe((result)=>{
      if(result){
        this.elements = result;
      }
    });
  } 

  mission(){
    this.route.navigate(['content']);
  }
}