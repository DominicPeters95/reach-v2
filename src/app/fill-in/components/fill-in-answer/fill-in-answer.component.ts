import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Answer } from '../../../models/model';
import { FillInService } from 'src/app/services/fill-in.service';

@Component({
  selector: 'app-fill-in-answer',
  templateUrl: './fill-in-answer.component.html',
  styleUrls: ['./fill-in-answer.component.scss']
})
export class FillInAnswerComponent implements OnInit{
  
  correctAnswers: Answer[] = [];
  answers: Answer[] = [];
  color = "";
  @Output() optionId = new EventEmitter<any>();

  constructor(private dataService: FillInService){  }
  
  ngOnInit(): void {
    this.dataService.loadAnswers().subscribe((result: Answer[])=>{
      if(result){
        this.correctAnswers = JSON.parse(JSON.stringify(result));
        this.answers = this.shuffle(result);
      }
    });
    this.dataService.getRemovedAnswer().subscribe((ans: Answer)=>{
      this.answers.push(ans);
    }); 

    this.dataService.targetColor.subscribe((result)=>{
      this.color = result;
    })
  }

  shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  onClick(index: number, id: string){
    if(this.dataService.index === -1) return
    let option = {
      id: id,
      content: this.answers[index],
      correct: this.correctAnswers[this.dataService.index-1]
    }
    this.answers.splice(index, 1);
    // this.correctAnswers.splice(index, 1);
    this.optionId.emit(option);
  }

  trackByIndex(index: number){return index;}

}
