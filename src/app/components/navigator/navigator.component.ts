import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/module';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  questionIndex: number[] = [];
  buttonType = "";
  constructor(protected dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.loadQuestions().subscribe((result: Question[]) => {
      if (result) {
        let i = 0
        for (let question of result) {
          if (question.type === "content") {
            this.questionIndex.push(i);
          }
          i++;
        }
      }
    });
    this.dataService.isAllFilled.subscribe((result) => {
      if (result) this.buttonType = "Check >";
      else this.buttonType = "";
    });
  }

  checkAnswer() {
    if (this.buttonType === "Check >") {
      this.dataService.setAnswerChecker(true);
      this.dataService.isAnswerClikced = true;
      this.buttonType = "Next >";
    }
  }


  contains(i: number, qlist: number[]) {
    if (i === this.dataService.index) return false;
    else return qlist.includes(i);
  }
}
