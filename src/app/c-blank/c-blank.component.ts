import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';

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
  isChecked = false;
  prevColor = "#444444";
  showed = false;

  constructor(private dataService: DataService){}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.filledAnswer.content !== undefined) {
      this.isFilled = true;
      this.isSelected = false;
      // this.bgColor = '#A1566B';
      // this.borderColor = '#A1566B';
      this.text = this.filledAnswer.content.elements[0].content;
      console.log(this.filledAnswer.content.elements[0].content);
      console.log(this.filledAnswer.correct.elements[0].content);
      
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
        this.isChecked = true;
      }
    }); 
  }

  onClick(){
    this.dataService.isBlankCLicked = !this.dataService.isBlankCLicked;
    if(this.isChecked && !this.idList.includes(this.filledAnswer.id)){
      let color = this.bgColor;
      this.borderColor = this.prevColor;
      this.bgColor = this.prevColor;
      this.prevColor = color;
      this.showed = !this.showed;
      if(this.showed) this.text = this.filledAnswer.correct.elements[0].content;
      else this.text = this.filledAnswer.content.elements[0].content;
    }
  }

}
