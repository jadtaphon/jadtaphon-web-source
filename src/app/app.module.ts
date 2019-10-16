import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';

import {AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UsersComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
