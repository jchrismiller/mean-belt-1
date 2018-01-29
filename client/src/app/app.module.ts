import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Post
import { PostComponent } from './post/post.component';
import { PostNewComponent } from './post/post-new/post-new.component';
import { PostListComponent } from './post/post-list/post-list.component';

// User
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';

// Services
import { PostService } from './post/post.service';
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostNewComponent,
    PostListComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  PostService, 
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
