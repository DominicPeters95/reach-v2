import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PresentationItem, Question } from '../models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeInService {

  isAnswerClikced = new BehaviorSubject<boolean>(false);
  isNextClikced = new BehaviorSubject<boolean>(false); 
  textData = new BehaviorSubject<string>("");
  targetColor = new BehaviorSubject<string>("#F7F7F7");
  presentationTitle = "";
  private presentationList = new BehaviorSubject<PresentationItem[]>([]);
  private directionsList = new BehaviorSubject<PresentationItem[]>([]);
  private contentList = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  loadData(){
    this.http.get('http://localhost:3000/type_in').subscribe((result:any)=>{
      if(result){
        this.presentationTitle = result['presentation']['title'];
        this.presentationList.next(result['presentation']['elements']);
        this.directionsList.next(result['directions']['elements']); 
        this.targetColor.next(result['targetSkillColor']);
        this.contentList.next(result['contents']);
      }
    });
  }
  
  loadPresentation(){
    return this.presentationList.asObservable();
  }

  loadDirections(){
    return this.directionsList.asObservable();
  }

  loadContent(){
    return this.contentList.asObservable();
  }

  transformQuestion(question: Question): Question{
    let content = question.content;    
    
    const regex = /<c-typein |hint='|id='|ids='|display='|length='|' |'>/g;
    content = content.replace(/"/g, "'");
    content = content.replace(regex, function(match) {
      if (match === "<c-typein ") {
        return "<c-typein [correctAnswer]=\"context\" [subtype]=\"'type_in'\" ";
      } else if(match === "id='") {
        return "[id]=\"'";
      } else if(match === "ids='") {
        return "[ids]=\"'";
      } else if(match === "hint='") {
        return "[hint]=\"'";
      } else if(match === "display='") {
        return "[display]=\"'";
      } else if(match === "length='") {
        return "[length]=\"'";
      } else if(match === "' ") {
        return "'\" ";
      } else if(match === "'>") {
        return "'\">";
      }
      else return match;
    });
    // content = content.replace(/'EN-US'"/g, "\"EN-US\"");
    content = content.replace(/lang=/g, "lang=\"");
    question.content = content;
    return question;
  }

  reloadAll(){}

}
