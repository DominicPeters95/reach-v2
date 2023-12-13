import { Component, OnInit } from '@angular/core';
import { Answer, Question } from 'src/app/models/model';
import { BuildSentenceService } from 'src/app/services/build-sentence.service';

@Component({
  selector: 'app-build-sentence-content',
  templateUrl: './build-sentence-content.component.html',
  styleUrls: ['./build-sentence-content.component.scss']
})
export class BuildSentenceContentComponent implements OnInit{
  
  title = "";
  data: any[] = [];
  question?: Question;
  answers: Answer[] = [];
  index = 0;

  constructor(private dataService: BuildSentenceService){}

  ngOnInit(): void {
    this.dataService.loadDirections().subscribe((result)=>{
      if(result){
        this.title = result[0]['content'];
      }
    });

    this.dataService.loadContent().subscribe((result)=>{
      if(result){
        this.data = result;
        this.changeData();
      }
    });
    this.dataService.isNextClikced.asObservable().subscribe((result)=>{
      if(result) {
        this.index++
        if(this.index < this.data.length) this.changeData();
      }
    });
  }


  changeData(){
    this.question = this.dataService.transformQuestion(this.data[this.index]['question']['elements'][0]);
    this.answers = this.data[this.index]['question']['answers'];
  }
}