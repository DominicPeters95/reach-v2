import { Injectable } from '@angular/core';
import { Answer, PresentationItem, Question } from '../modules/module';
import { HttpClient } from '@angular/common/http'
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  index: number = -1;
  targetColor = new BehaviorSubject<string>("#F7F7F7");
  isBlankCLicked = true;
  qIndexList: number[] = [];
  isAnswerClikced = false;
  isLoaded = new Subject<boolean>();
  isAllFilled = new Subject<boolean>();
  private questionsList = new BehaviorSubject<Question[]>([]);
  private answersList = new BehaviorSubject<Answer[]>([]);
  presentationTitle = "";
  private presentationList = new BehaviorSubject<PresentationItem[]>([]);
  private directionsList = new BehaviorSubject<PresentationItem[]>([]);
  private removedAnswer = new Subject<Answer>(); 
  private answerChecker = new Subject<boolean>(); 
  
  constructor(private http: HttpClient) { }

  loadData(){
    this.http.get('http://localhost:3000/data').subscribe((result:any)=>{
      if(result){
        this.presentationTitle = result['presentation']['title'];
        this.presentationList.next(result['presentation']['elements']);
        this.directionsList.next(result['directions']['elements']); 
        this.targetColor.next(result['targetSkillColor']);
        this.questionsList.next(result['contents'][0]['question']['elements']);
        this.answersList.next(result['contents'][0]['question']['answers']);
      }
    });
  }

  loadPresentation(){
    return this.presentationList.asObservable();
  }
  
  loadDirections(){
    return this.directionsList.asObservable();
  }

  loadQuestions(){
    return this.questionsList.asObservable();
  }

  transformQuestion(question: Question): Question{
    
    let content = question.content;
    
    const regex = /<c-blank |ids='|display='|length='|' |'>/g;

    content = content.replace(regex, function(match) {
      if (match === "<c-blank ") {
        return "<c-blank [filledAnswer]=\"context\" ";
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
      }else return match;
    });
    
    question.content = content;
    return question;
  }

  loadAnswers(){
    return this.answersList.asObservable();
  }  

  setRemovedAnswer(ans: Answer){
    this.removedAnswer.next(ans);
  }

  getRemovedAnswer(){
    return this.removedAnswer.asObservable();
  }

  setAnswerChecker(check: boolean){
    this.answerChecker.next(check);
  }

  getAnswerChecker(){
    return this.answerChecker.asObservable();
  }
}
