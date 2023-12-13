import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresentationItem } from 'src/app/models/model';
import { BuildSentenceService } from 'src/app/services/build-sentence.service';

@Component({
  selector: 'app-bs-fi-directions',
  templateUrl: './bs-directions.component.html',
  styleUrls: ['./bs-directions.component.scss']
})
export class BsDirectionsComponent {
  title: string = "";
  elements: PresentationItem[] = [];

  constructor(private dataService: BuildSentenceService, private route: Router){}

  ngOnInit(): void {
    this.dataService.loadDirections().subscribe((result)=>{
      if(result){
        this.elements = result;
      }
    });
  } 

  mission(){
    this.route.navigate(['build_sentence_content']);
  }
}
