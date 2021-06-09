import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//boostrap表示ライブラリ
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//ngForとか使うため
import { FormsModule } from '@angular/forms';
//自作pipe
import { ChatDatePipe } from './pipe/chat-date.pipe'; // 追加
//firestore
import { environment } from '../environments/environment'; // 追加
import { AngularFireModule } from '@angular/fire'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加


@NgModule({
  declarations: [
    AppComponent,
    ChatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加,
    AngularFirestoreModule,  // 追加
    AngularFireAuthModule,  // 追加
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
