import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PresentationItem } from 'src/app/models/model';
import { FillInService } from 'src/app/services/fill-in.service';

@Component({
  selector: 'app-bs-fi-directions',
  templateUrl: './fi-directions.component.html',
  styleUrls: ['./fi-directions.component.scss']
})
export class FiDirectionsComponent implements OnInit{
  
  title: string = "";
  elements: PresentationItem[] = [];

  constructor(private dataService: FillInService, private route: Router){}

  ngOnInit(): void {

    this.dataService.loadDirections().subscribe((result)=>{
      if(result){
        this.elements = result;
      }
    });
  } 

  mission(){
    this.route.navigate(['fill_in_content']);
  }
}