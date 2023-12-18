import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Answer } from 'src/app/models/model';
import { TypeInService } from 'src/app/services/type-in.service';

@Component({
  selector: 'c-typein',
  templateUrl: './c-typein.component.html',
  styleUrls: ['./c-typein.component.scss']
})
export class CTypeinComponent implements OnInit{
  @Input()correctAnswer!: Answer
  @Input()hint: string = "";
  @Input()ids: string = "";
  @Input()id: string = "";
  @Input()display: string = "";
  @Input()length: string = "";
  @Input()subtype: string = "";
  @ViewChild('myInput')
  inputField!: ElementRef;

  bgColor: string = '#F7F7F7';
  borderColor: string = "#dbdbdb";
  idList: string[] = []
  text = "";
  isSelected = true;
  isChecked = false;
  color: string = 'black';
  prevColor = "#444444";
  showed = false;
  prevText = "";

  constructor(private typeInService: TypeInService){}

  ngOnInit(): void {
    // 'border': isSelected? '.13rem solid #006080': '.13rem solid #dbdbdb',
        
    this.idList = this.ids.split(",");
    this.prevText = this.correctAnswer.elements[0].content;
    this.typeInService.isAnswerClikced.asObservable().subscribe((result)=>{
      if(result) this.checkAnswer();
    });
    this.bgColor = '#F7F7F7';
    this.borderColor = "#006080";
    this.color = 'black';
  
  }

  ngAfterViewInit() {
    this.inputField.nativeElement.focus();
  }

  checkAnswer(){
    let cAnswer = this.correctAnswer.elements[0].content;
    if(cAnswer === this.text) {
      this.bgColor = 'green';
      this.borderColor = 'green';
      this.color = 'white'
      console.log("True");
    }
    else {
      this.bgColor = "red";
      this.borderColor = 'red';
      this.color = 'white'
      console.log("False");
    }
    this.isChecked = true;
  }

  onDataChnage(change: string){
    this.typeInService.textData.next(change);
  }

  onClick(){
    if(this.isChecked){
      let saveColor = this.bgColor;
      let saveText = this.text;
      this.borderColor = this.prevColor;
      this.bgColor = this.prevColor;
      this.text = this.prevText;
      
      this.prevColor = saveColor;
      this.prevText = saveText;
      this.showed = !this.showed;
    }
  }

}