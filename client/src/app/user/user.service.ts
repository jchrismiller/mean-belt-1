import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
	currentUser: User;

  constructor(private _http: Http) { }

  createUser(user: User, callback, errorback) {
  	this._http.post('/users', user).subscribe(
  		(res) => {
  			const user = res.json();
        console.log("Hi Error User!");
  			this.currentUser = user;

  			callback(this.getCurrentUser);
  		},
  		(err) => {
        errorback();
  		}
  	)
  }

  getCurrentUser(callback, errorback) {
    this._http.get('/sessions').subscribe(
      (res) => {
        const user = res.json();
        if (user) {
          this.currentUser = user;
        }
        // console.log(user.name)
        callback(user);
      },
      (err) => {
        errorback(err);
      }
    );
  }

  logout(callback, errorback) {
  	this._http.delete('/sessions').subscribe(
  		(res) => {
  			this.currentUser = null;

  			callback(res.json());
  		},
  		(err) => {
  			errorback(err);
  		})
  }
}
