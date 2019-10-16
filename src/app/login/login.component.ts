import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: AngularFireList<any>;
  user: any[];
  log: any;

  constructor(private router: Router, private db: AngularFireDatabase ) { 
    this.users=db.list('59110440112/user');
  }

  ngOnInit() {
    this.users.snapshotChanges().pipe(map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      })).subscribe(items => {
      this.user = items;
      console.log(this.user)
      })
  }
  login(user: string, password: string) {
    //console.log(`เรียกฟังก์ชัน login(user=${user}, password=${password})`);
    for(let u of this.user){
      if(user==u.value.username){
        if(password==u.value.password){
          this.log=true;
          //console.log(this.log)
        }else{
          alert('รหัสไม่ถูกต้อง')
        }
      }
    }

    this.goto(this.log)
    // if (user === 'admin') {
    //   console.log('ยินดีต้อนรับ admin');
    // } else {
    //   console.log(`ยินดีต้อนรับคุณ ${user}`);
    // }
  }
  goto(log: any){
    if(log==true){
      console.log("yes")
      this.router.navigate(['/users']);
    }
  }
}
