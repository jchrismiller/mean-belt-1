import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { AnswerService }  from '../answer.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {
	id: string;
	post: Post;
  answers: Answer[] = [];

  constructor(
  	private _postService: PostService, 
  	private _activatedRoute: ActivatedRoute,
    private _answerService: AnswerService) 
  { 

    this._activatedRoute.paramMap.subscribe( 
    (params) => 
    {
    this.id = params.get('id');
    console.log('params_id', this.id);  
    }
   );
  }


  ngOnInit() {

  	this.post = new Post();
  	this._postService.retrievePost(this.id, 
    (post) => {
      this.post = post;
      console.log(post);
    },
    (err) => {
      console.log(err.json())
    }
   );

    this._answerService.retrieveAnswers(this.id, 
    (answers) => {
      this.answers = answers;
      console.log(answers);
    },
    (err) => {
      console.log(err.json())
    }
   );    
  }
}
