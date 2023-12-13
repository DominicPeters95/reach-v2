import { Component, OnInit } from '@angular/core';
import { FillInService } from 'src/app/services/fill-in.service';

@Component({
  selector: 'app-fill-in-content',
  templateUrl: './fill-in-content.component.html',
  styleUrls: ['./fill-in-content.component.scss']
})
export class FillInContentComponent implements OnInit{

  option: any;
  isLoaded = false;
  title = "";
  subtype = "";

  constructor(private dataService: FillInService){}

  ngOnInit(): void {

    this.dataService.isLoaded.subscribe((result)=>{
      if(result) this.isLoaded = result;
    })  
    this.dataService.loadDirections().subscribe((result)=>{
      if(result){
        this.title = result[0].content;
      }
    })
  }

  addOptions(option: any){
    this.option = option;
  }
}
