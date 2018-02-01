import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostNewComponent } from './post/post-new/post-new.component';
import { PostShowComponent } from './post/post-show/post-show.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { AnswerNewComponent } from './post/answer-new/answer-new.component';

const routes: Routes = [
	{ path: 'user', component: UserComponent, children: [
		{ path: 'new', component: UserNewComponent }
	]},

	{ path: 'dashboard', component: PostComponent, children: [
		{ path: '', component: PostListComponent },
	]},

	{ path: '', pathMatch: 'full', component: UserComponent, children: [
		{ path: '', component: UserNewComponent }
	]},

	{ path: 'post', component: PostComponent, children: [
		// localhost: 8000/post
		{ path: '', pathMatch: 'full', component: PostListComponent},
		// localhost: 8000/post/new
		{ path: 'new', component: PostNewComponent },
		// localhost: 8000/post/show
		{ path: 'show/:id', component: PostShowComponent }
	]},

	{ path: 'post/:id/answer', component: AnswerNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
