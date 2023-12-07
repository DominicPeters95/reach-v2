import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';
import { Answer } from '../modules/module';

@Component({
  selector: 'c-blank',
  templateUrl: './c-blank.component.html',
  styleUrls: ['./c-blank.component.scss']
})
export class CBlankComponent implements OnInit, OnChanges{
  @Input() filledAnswer: any;
  @Input()ids: string = "";
  @Input()display: string = "";
  @Input()length: string = "";
  bgColor: string = '#F7F7F7';
  borderColor: string = "#dbdbdb";
  idList: string[] = []
  text = "_";
  isFilled = false;
  isSelected = false;
  correctAnswer?: Answer;

  constructor(private dataService: DataService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.filledAnswer.content !== undefined) {
      this.isFilled = true;
      this.isSelected = false;
      // this.bgColor = '#A1566B';
      // this.borderColor = '#A1566B';
      this.text = this.filledAnswer.content.elements[0].content;
      this.dataService.targetColor.subscribe((result)=>{
        this.bgColor = result;
           this.borderColor = '#A1566B';
      
      });
    }

    if(this.filledAnswer.isSelected !== undefined 
    && this.filledAnswer.content === undefined) {
        this.isFilled = false;
        this.isSelected = this.filledAnswer.isSelected;
        this.borderColor = "#dbdbdb";
        this.bgColor = '#F7F7F7';
        this.text = "_";
    }
        
  }

  ngOnInit(): void {
    this.idList = this.ids.split(",");
    this.dataService.getAnswerChecker().subscribe((result: boolean)=>{
      if(this.isFilled){
        if(this.idList.includes(this.filledAnswer.id)){
          this.borderColor = 'green';
          this.bgColor = 'green';
        }
        else{
          this.borderColor = 'red';
          this.bgColor = 'red';
        } 
      }
    }); 
  }

  onClick(){
    this.dataService.isBlankCLicked = !this.dataService.isBlankCLicked;
  }

}
