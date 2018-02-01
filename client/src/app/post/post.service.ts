import { Injectable } from '@angular/core';
import { Post } from './post';
import { Answer } from './answer';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Injectable()
export class PostService {
  answers: Answer[] = [];
	posts: Post[] = [];
  post: Post;

  constructor(private _http: Http) { 
  	this.posts = [];    

  }

  createPost(post, callback, errorback){
  	this._http.post('/posts', post).subscribe(
  		(res) => {
  			const post = res.json();
  			this.posts.push(post);

  			callback(post);
  		},
  		(err) => {
  			errorback(err.json());
  		})
  }

  retrievePosts(callback, errorback) {
  	this._http.get('/posts').subscribe(
  		(res) => 
  		{
  			this.posts = res.json();

  			callback(this.posts);
  		},
  		(err) => 
  		{
  			errorback(err.json());
  		}
  	)
  }

  retrievePost(id, callback, errorback) {
    this._http.get('/posts/' + id).subscribe(
      (res) => {
        const post = res.json();
        this.post = post;
        console.log(post)
        callback(this.post);
      },
      (err) => {
        errorback(err.json());
      }
    )
  }

  createAnswer(qid, answer: Answer, callback, errorback) {
    this._http.post('/posts/' + qid + '/answer', answer).subscribe(
      (res) => {
        console.log('posting an answer');
        const answer = res.json();
        this.posts.push(answer);
        callback(answer);
      },
      (err) => {
        errorback(err);
      }
    );
  }

  retrieveAnswers(id, callback, errorback){
    console.log('retrieving answers');
    this._http.get('/posts/'+id+'/answers/').subscribe(
        (res) => {
          const answers = res.json();
          this.answers = answers;
          callback(answers);
        },
        (err) => {
          errorback(err);
        }
      );
  }

  deletePost(id, callback, errorback) {
    this._http.delete('/posts/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err.json());
      }
    )
  }
}
