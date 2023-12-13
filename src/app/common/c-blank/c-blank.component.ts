import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BuildSentenceService } from 'src/app/services/build-sentence.service';
import { FillInService } from 'src/app/services/fill-in.service';


@Component({
  selector: 'c-blank',
  templateUrl: './c-blank.component.html',
  styleUrls: ['./c-blank.component.scss']
})
export class CBlankComponent implements OnInit, OnChanges{
  @Input() filledAnswer: any;
  @Input()ids: string = "";
  @Input()id: string = "";
  @Input()display: string = "";
  @Input()length: string = "";
  @Input()subtype: string = "";

  bgColor: string = '#F7F7F7';
  borderColor: string = "#dbdbdb";
  idList: string[] = []
  text = "_";
  isFilled = false;
  isSelected = false;
  isChecked = false;
  prevColor = "#444444";
  showed = false;

  constructor(private fillService: FillInService, private buildService: BuildSentenceService){}

  ngOnInit(): void {
    if(this.subtype === "fill_in") this.fillInOnInit();
    if(this.subtype === "build_sentence") this.buildSenetenceOnInit();
  }

  fillInOnInit(){
    this.idList = this.ids.split(",");
    this.fillService.getAnswerChecker().subscribe((result: boolean)=>{
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

  buildSenetenceOnInit(){
    this.idList = this.ids.split(",");    
    this.buildService.cBlankList.push(this.id); 
    this.buildService.cBlankRemain.push(this.id);  

    this.buildService.currBlankId.asObservable().subscribe((result)=>{
      if(result === "")
        this.buildService.currBlankId.next(this.id);
      else{
        if(result === this.id) setTimeout(()=>{
          this.isSelected = true;
          this.buildService.index = this.buildService.cBlankList.indexOf(this.id);
        }, 50);
        else this.isSelected = false;
      }
    });

    this.buildService.currAnswer.asObservable().subscribe((result)=>{
      if(result && this.isSelected && !this.isFilled){
        
        this.filledAnswer = result;
        this.text = result.content.elements[0].content;  

        this.isSelected = false;
        this.isFilled = true;
        this.buildService.targetColor.subscribe((result)=>{
          this.bgColor = result;
          this.borderColor = result;
        });
        let i = this.buildService.cBlankList.indexOf(this.id);
        
        this.buildService.cBlankRemain.splice(this.buildService.cBlankRemain.indexOf(this.id), 1);
        
        while(true){
          if(this.buildService.cBlankRemain.length == 0) {
            this.buildService.isAllFilled.next(true);
            break;
          };
          if(i >= this.buildService.cBlankList.length) i = 0;
          else{
            if(this.buildService.cBlankRemain.includes(this.buildService.cBlankList[i])) 
              break;
            else i++;
          }
        }

        if(this.buildService.cBlankRemain.length != 0) 
          setTimeout(()=>{
            this.buildService.currBlankId.next(this.buildService.cBlankList[i]);
          }, 50);
      }
    });

    this.buildService.isAnswerClikced.asObservable().subscribe((result)=>{
      if(result && this.filledAnswer){
        if(this.id == this.filledAnswer.id){
          this.borderColor = 'green';
          this.bgColor = 'green';
        }else{
          this.borderColor = 'red';
          this.bgColor = 'red';
        }
      }
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.subtype === "fill_in") this.fillInOnChange();
    if(this.subtype === "build_sentence") this.buildSenetenceOnChnage();
  }

  fillInOnChange(){
    if(this.filledAnswer.content !== undefined) {
      this.isFilled = true;
      this.isSelected = false;
      // this.bgColor = '#A1566B';
      // this.borderColor = '#A1566B';
      this.text = this.filledAnswer.content.elements[0].content;
      
      this.fillService.targetColor.subscribe((result)=>{
        this.bgColor = result;
           this.borderColor = '#A1566B';
      });
    }

    if(this.filledAnswer.isSelected !== undefined 
    && this.filledAnswer.content === undefined) {
        this.isFilled = false;
        this.isSelected = this.filledAnswer.isSelected;
        this.borderColor = this.isSelected? '.13rem solid #006080': '.13rem solid #dbdbdb';
        this.bgColor = '#F7F7F7';
        this.text = "_";
    }
  }

  buildSenetenceOnChnage(){
    this.buildService.currBlankId.next(this.buildService.cBlankList[0]);
  }

  onClick(){
    if(this.subtype === "fill_in") this.fillInClick();
    if(this.subtype === "build_sentence") this.buildSenetenceClick();
  }

  fillInClick(){
    this.fillService.isBlankCLicked = !this.fillService.isBlankCLicked;
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

  buildSenetenceClick(){
    if(this.isFilled){
      if(this.bgColor === "red" || this.bgColor === "green" || this.bgColor === "#444444"){
        if(this.bgColor === "green") return;
        let color = this.bgColor;
        this.borderColor = this.prevColor;
        this.bgColor = this.prevColor;
        this.prevColor = color;
        this.showed = !this.showed;
        
        if(this.showed) this.text = this.filledAnswer.correct.elements[0].content;
        else this.text = this.filledAnswer.content.elements[0].content;
      }else{
        this.text = "_";
        this.isFilled = false;
        this.bgColor = '#F7F7F7';
        this.borderColor = "#dbdbdb";
        this.buildService.isAllFilled.next(false);
        this.buildService.cBlankRemain.push(this.id);
        this.buildService.removedAnswer.next(this.filledAnswer.content);
        this.buildService.currBlankId.next(this.id);
      }
    }
    else{
      this.buildService.currBlankId.next(this.id);
    }
  }

}
