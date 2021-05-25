import { Component } from '@angular/core';
import { Comment } from "./class/chat"

//comments: {name:string, content:string}[] = [
const COMMENTS: Comment[] = [
  {name: "suzuki", content: "１番目のコメントです"},
  {name: "suzuki", content: "２番目のコメントです"},
  {name: "suzuki", content: "３番目のコメントです"}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-app1';

  public content = ""
  public comments = COMMENTS;

}
