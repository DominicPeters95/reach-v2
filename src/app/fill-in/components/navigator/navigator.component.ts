import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/model';
import { FillInService } from 'src/app/services/fill-in.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit{
  
  questionIndex: number[] = [];
  buttonType = "";
  constructor(protected dataService:  FillInService, private route: Router){}
  
  ngOnInit(): void {
    this.dataService.loadQuestions().subscribe((result: Question[])=>{
      if(result){
        let i = 0
        for(let question of result){
          if(question.type === "content"){
            this.questionIndex.push(i);
          }
          i++;
        }
      }
    });
    this.dataService.isAllFilled.subscribe((result)=>{
      if(result) this.buttonType = "Check >";
      else this.buttonType = "";
    });
  }

  checkAnswer(){
    if(this.buttonType === "Check >"){
      this.dataService.setAnswerChecker(true);
      this.dataService.isAnswerClikced = true;
      this.buttonType = "Next >";
    }  
    else if(this.buttonType === "Next >"){
      this.route.navigate([""]);
    }
  }


  contains(i: number, qlist: number[]){
    if(i === this.dataService.index) return false;
    else return qlist.includes(i);
  }
}
