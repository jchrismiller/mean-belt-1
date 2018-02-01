import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from './answer';
import { Post } from '../post/post';

@Injectable()
export class AnswerService {
  answers: Answer[];
  answer: Answer;

  constructor(private _http: Http) {
    this.answers = [];
   }

   createAnswer(answer, callback, errorback) {

    this._http.post('/answers', answer).subscribe(
      (res) => {
        console.log(res.json());
        let answer = res.json();
        this.answer = answer;
        console.log(answer);
        callback(answer);
      },
      (err) => {
        console.log("errorr rback")
        errorback(err.json());
      }
    )
  }

  retrieveAnswers(id, callback, errorback) {
    this._http.get('/answers/' + id).subscribe(
      (res) => {
        let answers = res.json();
        this.answers = answers;
        callback(answers);
      },
       (err) => {
         errorback(err);
       }
      )
   }
}
