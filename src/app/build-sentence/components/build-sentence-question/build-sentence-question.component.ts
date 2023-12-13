import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/models/model';
import { BuildSentenceService } from 'src/app/services/build-sentence.service';

@Component({
  selector: 'app-build-sentence-question',
  templateUrl: './build-sentence-question.component.html',
  styleUrls: ['./build-sentence-question.component.scss']
})
export class BuildSentenceQuestionComponent implements OnInit, OnChanges{

  @Input() question?: Question;
  content: string = ""

  constructor(private dataService: BuildSentenceService){}

  ngOnInit(): void {
    this.content = this.question?.content!;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.content = this.question?.content!;
  }
  

}
