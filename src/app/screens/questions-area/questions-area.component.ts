import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { Question } from '../../models/module';
import { DataService } from '../../services/data.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-questions-area',
  templateUrl: './questions-area.component.html',
  styleUrls: ['./questions-area.component.scss']
})

export class QuestionsAreaComponent implements OnInit, OnChanges {
  @Input() option: any;
  contexts: any[] = [];
  questions: Question[] = [];
  prev = -1;

  constructor(private dataService: DataService, private scroller: ViewportScroller) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataService.index !== -1) {
      this.contexts[this.dataService.index] = this.option;
      this.dataService.qIndexList = this.dataService.qIndexList.filter((e) => { return e !== this.dataService.index });
      this.autoSelect();
      // this.prev = -1;
      // this.dataService.index = -1;
    }
  }

  ngOnInit(): void {
    this.dataService.loadQuestions().subscribe((result: Question[]) => {
      if (result) {
        this.loadQuestions(result);
      }
    })

    // setTimeout(()=>{
    //   console.log("Auto Scroll")
    //   this.autoScroll(this.dataService.qIndexList.length);      
    // }, 3000);

  }

  async loadQuestions(result: Question[]) {
    let i = 0;
    for (let question of result) {
      if (question.type === "content") {
        this.dataService.qIndexList.push(i);
        this.questions.push(this.dataService.transformQuestion(question));
      }
      else
        this.questions.push(question);

      this.contexts.push({});
      await this.delay(700);
      this.autoScroll(i);
      i++;
    }

    await this.delay(1500);
    this.autoSelect();
    this.dataService.isLoaded.next(true);
  }


  delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }


  selecetdQuestion(i: number) {
    this.dataService.isBlankCLicked = !this.dataService.isBlankCLicked;

    if (this.dataService.isBlankCLicked) {
      if (!this.dataService.isAnswerClikced) {
        this.dataService.index = i;
        if (this.contexts[i].content === undefined) {
          if (this.prev === -1) {
            this.contexts[i] = { isSelected: true };
            this.prev = i;
          }
          else if (i === this.prev) {
            this.contexts[i] = { isSelected: false };
            this.prev = -1;
            this.dataService.index = -1;
          }
          else {
            this.contexts[this.prev] = { isSelected: false };
            this.contexts[i] = { isSelected: true };
            this.prev = i;
          }
        }
        else {
          this.dataService.setRemovedAnswer(this.contexts[i].content);
          this.contexts[i] = { isSelected: false };
          this.dataService.index = -1;
          this.dataService.qIndexList.push(i);
          this.dataService.isAllFilled.next(false);

          if (this.prev !== -1) {
            this.contexts[this.prev] = { isSelected: false };
          }
        }
      }
      else {
        // Write the right answer code
      }
    }
    else this.dataService.isBlankCLicked = !this.dataService.isBlankCLicked;
  }

  autoSelect() {
    if (this.dataService.qIndexList.length !== 0) {
      let i = this.dataService.index;
      while (true) {
        if (i >= this.questions.length) i = 0;
        else {
          if (this.dataService.qIndexList.includes(i)) {
            break;
          }
          else i++;
        }
      }
      this.dataService.index = i;
      this.prev = i;
      this.contexts[i] = { isSelected: true };
      this.autoScroll(i - 1);
    }
    else {
      this.dataService.isAllFilled.next(true);
      this.prev = -1;
      this.dataService.index = -1;
    }
  }

  autoScroll(i: number) {
    const targetElement = document.getElementById(`${i}`)!;
    this.scroller.scrollToAnchor(targetElement.id);
  }

  trackByIndex(index: number) { return index; }

}