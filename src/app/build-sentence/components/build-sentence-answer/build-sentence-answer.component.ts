import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/model';
import { BuildSentenceService } from 'src/app/services/build-sentence.service';

@Component({
  selector: 'app-build-sentence-answer',
  templateUrl: './build-sentence-answer.component.html',
  styleUrls: ['./build-sentence-answer.component.scss']
})
export class BuildSentenceAnswerComponent implements OnInit, OnChanges{

  @Input() answers: Answer[] = [];
  correctAnswers: Answer[] = [];
  newAnswer: Answer[] = [];
  color: string = "";

  constructor(private dataService: BuildSentenceService){}

  ngOnInit(): void {
    this.correctAnswers = JSON.parse(JSON.stringify(this.answers));
    this.newAnswer = this.shuffle(this.answers);
    this.dataService.removedAnswer.asObservable().subscribe((result)=>{
      if(result) 
        this.newAnswer.push(result);
      // console.log(result);
    });
    this.dataService.targetColor.subscribe((result)=>{
      this.color = result;
    })
  }

  ngOnChanges(){
    this.correctAnswers = JSON.parse(JSON.stringify(this.answers));
    this.newAnswer = this.shuffle(this.answers);
  }

  shuffle<T>(array: T[]): T[] {
    array = JSON.parse(JSON.stringify(array));
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  onClick(i: number){
    this.dataService.currAnswer.next({
      id: this.newAnswer[i].id,
      content: this.newAnswer[i],
      correct: this.correctAnswers[this.dataService.index]
    });
    this.newAnswer.splice(i, 1);
  }

}
