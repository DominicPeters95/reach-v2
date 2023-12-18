import { Component, OnInit } from '@angular/core';
import { Answer, Question } from 'src/app/models/model';
import { TypeInService } from 'src/app/services/type-in.service';

@Component({
  selector: 'app-type-in-content',
  templateUrl: './type-in-content.component.html',
  styleUrls: ['./type-in-content.component.scss']
})
export class TypeInContentComponent implements OnInit{

  title = "";
  data: any[] = [];
  question?: Question;
  answers?: Answer;
  index = 0;

  constructor(private dataService: TypeInService){}

  ngOnInit(): void {
    this.dataService.loadDirections().subscribe((result)=>{
      if(result){
        this.title = result[0]['content'];
      }
    });

    this.dataService.loadContent().subscribe((result)=>{
      if(result){
        this.data = result;
        this.changeData();
      }
    });

    this.dataService.isNextClikced.asObservable().subscribe((result)=>{
      if(result) {
        this.index++
        if(this.index < this.data.length) this.changeData();
      }
    });
  }

  changeData(){
    this.question = this.dataService.transformQuestion(this.data[this.index]['question']['elements'][0]);
    this.answers = this.data[this.index]['question']['answers'][0];    
  }

}
