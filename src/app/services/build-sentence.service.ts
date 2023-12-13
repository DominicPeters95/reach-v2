import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Answer, PresentationItem, Question } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class BuildSentenceService {

  index = 0;
  cBlankList: string[] = [];
  cBlankRemain: string[] = [];
  isAllFilled = new Subject<boolean>();
  isAnswerClikced = new BehaviorSubject<boolean>(false);
  isNextClikced = new BehaviorSubject<boolean>(false);
  currAnswer = new Subject<any>();
  currBlankId = new BehaviorSubject<string>("");
  targetColor = new BehaviorSubject<string>("#F7F7F7");
  removedAnswer = new Subject<Answer>();
  private contentList = new BehaviorSubject<any[]>([]);
  presentationTitle = "";
  private presentationList = new BehaviorSubject<PresentationItem[]>([]);
  private directionsList = new BehaviorSubject<PresentationItem[]>([]);

  constructor(private http: HttpClient) { }

  loadData(){
    this.http.get('http://localhost:3000/build_sentence').subscribe((result:any)=>{
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
    const regex = /<c-blank | c-blank> |id='|ids='|display='|length='|' |'>/g;
    content = content.replace(/"/g, "'");
    content = content.replace(regex, function(match) {
      if (match === "<c-blank ") {
        return "<c-blank [filledAnswer]=\"null\" [subtype]=\"'build_sentence'\" ";
      } else if(match === "id='") {
        return "[id]=\"'";
      } else if(match === "ids='") {
        return "[ids]=\"'";
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

  reloadAll(){
    this.index = 0;
    this.cBlankList = [];
    this.cBlankRemain = [];
    this.isAllFilled = new Subject<boolean>();
    this.isAnswerClikced = new BehaviorSubject<boolean>(false);
    this.isNextClikced = new BehaviorSubject<boolean>(false);
    this.currAnswer = new Subject<any>();
    this.currBlankId = new BehaviorSubject<string>("");
    this.targetColor = new BehaviorSubject<string>("#F7F7F7");
    this.removedAnswer = new Subject<Answer>();
    this.contentList = new BehaviorSubject<any[]>([]);
    this.presentationTitle = "";
    this.presentationList = new BehaviorSubject<PresentationItem[]>([]);
    this.directionsList = new BehaviorSubject<PresentationItem[]>([]);
  }
}
