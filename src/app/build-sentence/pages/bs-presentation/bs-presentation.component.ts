import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationItem } from 'src/app/models/model';
import { BuildSentenceService } from 'src/app/services/build-sentence.service';

@Component({
  selector: 'app-bs-fi-presentation',
  templateUrl: './bs-presentation.component.html',
  styleUrls: ['./bs-presentation.component.scss']
})
export class BsPresentationComponent {
  title = "";
  elements: PresentationItem[] = [];

  constructor(private dataService: BuildSentenceService, private route: Router){}

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
    this.route.navigate(['build_senetence/directions']);
  }


}
