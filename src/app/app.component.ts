import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>; 
  constructor(db: AngularFirestore) {
    this.items = db.collection('/data').valueChanges();
    console.log(this.items);
  }
}
