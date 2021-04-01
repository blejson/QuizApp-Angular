import { Component, OnInit } from '@angular/core';
import {Quiz, QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  message: string;
  quizList: Quiz[];
  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe(value => {
      this.quizList = value.quizzes;
    });
  }
}
