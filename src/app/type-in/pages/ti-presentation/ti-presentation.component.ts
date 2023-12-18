import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationItem } from 'src/app/models/model';
import { TypeInService } from 'src/app/services/type-in.service';

@Component({
  selector: 'app-ti-presentation',
  templateUrl: './ti-presentation.component.html',
  styleUrls: ['./ti-presentation.component.scss']
})
export class TiPresentationComponent {
  title: string = "";
  elements: PresentationItem[] = [];

  constructor(private dataService: TypeInService, private route: Router){}

  ngOnInit(): void {
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
    this.route.navigate(['type_in/directions']);
  }


}
