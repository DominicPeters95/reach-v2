import { Component, Input, OnInit } from '@angular/core';
import { FillInService } from 'src/app/services/fill-in.service';
import { Router } from '@angular/router';
import { PresentationItem } from 'src/app/models/model';

@Component({
  selector: 'app-bs-fi-presentation',
  templateUrl: './fi-presentation.component.html',
  styleUrls: ['./fi-presentation.component.scss']
})
export class FiPresentationComponent implements OnInit{
  title: string = ""
  elements: PresentationItem[] = [];
  subtype = "";
  service: any;

  constructor(
    private dataService: FillInService, 
    private route: Router, 
  ){}

  ngOnInit(): void {
    this.service = this.dataService;
    this.start();
  }

  start(){
    this.loadData();
    this.dataService.loadPresentation().subscribe((result: PresentationItem[])=>{
      if(result){
        for(let i of result){
          this.elements.push(i);
        }
        this.title = this.dataService.presentationTitle; 
      }
    });
  }

  async loadData(){
    await this.dataService.reloadAll();
    await this.dataService.loadData();
  }

  mission(){
    this.route.navigate(['fill_in/directions']);
  }

}
