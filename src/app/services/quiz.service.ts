import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient ) { }

  public getQuizzes(): Observable<QuizList> {
    return this.httpClient.get<QuizList>('http://localhost:8080/api/quiz');
  }
}
export interface Quiz {
  id: string;
  author: string;
}

export interface QuizList {
  quizzes: Quiz[];
}
