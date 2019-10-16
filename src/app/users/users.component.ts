import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: AngularFireList<any>;
  user: any[];

  constructor(private userService: UserService,private db: AngularFireDatabase) {
    this.users=db.list('59110440112/user');
  }

  ngOnInit() {

    this.users.snapshotChanges().pipe(map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      })).subscribe(items => {
      this.user = items;
      console.log(this.user)
      })
   
    // this.userService._getUsers().subscribe(
    //   (data: any) => {
    //     this.users = data.result.hits;
    //     console.log(this.users);
    //     for (const u of this.users) {
    //       // console.log(u['source'])
    //       // console.log(u._source)
    //       console.log(u._source.user);
    //     }
    //   },
    //   error => {

    //   }
    // );
  }

}
