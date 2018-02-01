import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AnswerService } from '../answer.service';
import { Answer } from '../answer';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {
	answer: Answer;
	post: Post;
	id: string;

  constructor(
    private _postService: PostService,
    private _answerService: AnswerService, 
    private _router: ActivatedRoute, 
    private _route: Router
    ) { 

    this.answer = new Answer();
    this._router.paramMap.subscribe( 
      (params) => {
          this.id = params.get('id')
      }
    )
  }

  ngOnInit() {
  	this.post = new Post();
  	this._postService.retrievePost(this.id,
  		(post) => {
  		this.post = post;
  	},
	  	(err) => {
	  		console.log("error yo")
	  }
  	);
  }

  onSubmit(event) {
    event.preventDefault();
    
    this.answer._post = this.post._id;

  	this._answerService.createAnswer(this.answer,
  		(answer) => {
  			this._route.navigateByUrl('/post');
  		},
  		(err) => {
  			console.log('error yooo')
  		}
  	);
  }

}


