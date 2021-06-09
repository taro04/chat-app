import { Component } from '@angular/core';
import { Comment,User } from './class/chat'; // 追加
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加
import { map } from 'rxjs/operators'; // 追加

const CURRENT_USER: User = new User(1, 'Tanaka Jiro'); // 自分のUser情報を追加
const ANOTHER_USER: User = new User(2, 'Suzuki Taro'); // 相手のUser情報を追加

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //items: Observable<any[]>; // 追加
  //item: Observable<any[]>
  //item$: Observable<any>
  public content = '';
  public currentUser = CURRENT_USER; // 追加
  public comments$: Observable<Comment[]>; // 更新


    // DI（依存性注入する機能を指定）
    constructor(private db: AngularFirestore) {
      this.comments$ = db
        .collection<Comment>('comments',ref=>{
            return ref.orderBy('date','asc')
          })
        .snapshotChanges()
        .pipe(
          map(actions => actions.map(action => {
            //
            const data = action.payload.doc.data() as Comment;
            const commentData = new Comment(data.user, data.content);
            commentData.setData(data.date);
            return commentData;
          }  ) ) );

      /*
      //'users'ドキュメントを一括で取得する
      this.items = db.collection('users').valueChanges();
      //'comments'ドキュメントの'item'を取得する
      this.item$ = db.collection<Comment>('comments').doc('item').valueChanges();
      */
    }

  // 新しいコメントを追加
  addComment(e: Event, comment: string) { // 更新
    //console.log("click")
    if (comment) {
      //console.log("commoent ok")
      this.db
          .collection('comments')
          .add(new Comment(this.currentUser, comment).deserialize()); // 更新
      this.content = '';
    }

    /* firebase公式のadd()の使用方法
    this.db.collection('comments').add({
        name: "Tokyo",
        country: "Japan"})
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        })
      .catch((error) => {
        console.error("Error adding document: ", error);
        });
    */

  }






}
