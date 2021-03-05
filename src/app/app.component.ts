import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, '雅見');
const ANOTHER_USER: User = new User(2, '信子');

const COMMENTS: Comment[] = [
  new Comment(CURRENT_USER, 'お前は本当によく頑張っているよ。'),
  new Comment(ANOTHER_USER, 'うん、雅見は本当によく頑張っていると思うよ。'),
  new Comment(CURRENT_USER, '本当にありがとう。'),
  new Comment(CURRENT_USER, 'しっかり足元を見て頑張るね'),
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // comments = COMMENTS;
  comments$: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>;
  currentUser = CURRENT_USER;
  comment = '';
  item$: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.item$ = db.object('/item').valueChanges();
    this.commentsRef = db.list('/comments');
    this.comments$ = this.commentsRef.valueChanges();
  }

  addComment(comment: string): void {
    if (comment) {
      this.commentsRef.push(new Comment(this.currentUser, comment));
      this.comment = '';
    }
  }
}
