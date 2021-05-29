import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { environment } from "../environments/environment"// firebaseの環境設定（Apiキーとか）
import { AngularFireModule } from "@angular/fire"
import { AngularFirestoreModule } from '@angular/fire/firestore'; // Firebase認証モジュール
import { AngularFireAuthModule } from '@angular/fire/auth'; // Firebase_DB_モジュール

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatDatePipe } from './pipe/chat-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule.forRoot() //指示されるが、無い
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加,
    AngularFirestoreModule,  // Firebase_DB_モジュール
    AngularFireAuthModule,  // Firebase認証モジュール
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
