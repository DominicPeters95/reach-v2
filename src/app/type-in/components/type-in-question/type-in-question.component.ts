import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Answer, Question } from 'src/app/models/model';
import { TypeInService } from 'src/app/services/type-in.service';

@Component({
  selector: 'app-type-in-question',
  templateUrl: './type-in-question.component.html',
  styleUrls: ['./type-in-question.component.scss']
})
export class TypeInQuestionComponent implements OnInit, OnChanges{

  @Input() question?: Question;
  @Input() answer?: Answer;
  
  content: string = ""

  constructor(private dataService: TypeInService){}

  ngOnInit(): void {
    this.content = this.question?.content!;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.content = this.question?.content!;
  }
  

}
