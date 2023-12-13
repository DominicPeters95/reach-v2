import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildSentenceService } from 'src/app/services/build-sentence.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit, OnChanges{

  @Input() questions = 0;
  @Input() index = 0;
  indexs: number[] = [];
  buttonType = "";
  constructor(protected dataService:  BuildSentenceService, private route: Router){}
  
  ngOnInit(): void {
    this.dataService.isAllFilled.subscribe((result)=>{
      if(result) this.buttonType = "Check >";
      else this.buttonType = "";
    });
  }

  ngOnChanges(){
    if(this.indexs.length != this.questions)for(let i = 0; i < this.questions; i++) this.indexs.push(i);
  }

  checkAnswer(){
    if(this.buttonType == "Check >"){
      // this.dataService.setAnswerChecker(true);
      this.dataService.isAnswerClikced.next(true);
      this.buttonType = "Next >";
    }  
    else if(this.buttonType == "Next >"){
      if(this.questions - this.index == 1) 
          this.route.navigate([""]);
      this.dataService.isNextClikced.next(true);
      this.dataService.cBlankList = [];
      this.dataService.cBlankRemain = [];
      this.dataService.currBlankId.next("");
      this.buttonType = "";
    }
  }
}
