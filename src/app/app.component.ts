import { Component } from '@angular/core';
import { Comment,User } from "./class/chat"

//comments: {name:string, content:string}[] = [
/*
const COMMENTS: Comment[] = [
  {name: "suzuki", content: "１番目のコメントです"},
  {name: "suzuki", content: "２番目のコメントです"},
  {name: "suzuki", content: "３番目のコメントです"}
]
*/

const CURRENT_USER:User = new User(1,"Suzuki taro")
const ANOTHER_USER:User = new User(2,"Tanaka jiro")
const COMMENTS: Comment[] = [
  new Comment(CURRENT_USER,"鈴木 1つ目のコメント"),
  new Comment(ANOTHER_USER,"田中 1つ目のコメント"),
  new Comment(CURRENT_USER,"鈴木 2つ目のコメント"),
  new Comment(CURRENT_USER,"鈴木 3つ目のコメント"),
  new Comment(ANOTHER_USER,"鈴木 2つ目のコメント"),
  new Comment(CURRENT_USER,"鈴木 2つ目のコメント")
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
  public currentUser = CURRENT_USER; //

  addComment(comment:string):void{
    if (comment) {
      this.comments.push(new Comment(this.currentUser,comment))
    }
  }

}
