import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '岩切　雅見', message: 'お前は本当によく頑張っているよ。' },
  {
    name: '岩切　信子',
    message: 'うん、雅見は本当によく頑張っていると思うよ。',
  },
  { name: '岩切　雅見', message: '本当にありがとう。' },
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMMENTS;
}
