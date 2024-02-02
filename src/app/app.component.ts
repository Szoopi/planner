import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { StoreService } from './store.service';
import { Plan } from './table.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-planner';

  allGuests: string[] = [];
  leftSqare1: string[] = [];
  leftSqare2: string[] = [];
  leftSqare3: string[] = [];
  leftSqare4: string[] = [];
  middleCircle1: string[] = [];
  middleCircle2: string[] = [];
  middleCircle3: string[] = [];
  rightSqare1: string[] = [];
  rightSqare2: string[] = [];
  rightSqare3: string[] = [];
  rightSqare4: string[] = [];


  constructor(private store: StoreService, db: AngularFireDatabase) {
    db.list('plan/allGuests').valueChanges().subscribe(list => this.allGuests = [...list as string[]]);
    db.list('plan/leftSqare1').valueChanges().subscribe(list => this.leftSqare1 = [...list as string[]]);
    db.list('plan/leftSqare2').valueChanges().subscribe(list => this.leftSqare2 = [...list as string[]]);
    db.list('plan/leftSqare3').valueChanges().subscribe(list => this.leftSqare3 = [...list as string[]]);
    db.list('plan/leftSqare4').valueChanges().subscribe(list => this.leftSqare4 = [...list as string[]]);
    db.list('plan/middleCircle1').valueChanges().subscribe(list => this.middleCircle1 = [...list as string[]]);
    db.list('plan/middleCircle2').valueChanges().subscribe(list => this.middleCircle2 = [...list as string[]]);
    db.list('plan/middleCircle3').valueChanges().subscribe(list => this.middleCircle3 = [...list as string[]]);
    db.list('plan/rightSqare1').valueChanges().subscribe(list => this.rightSqare1 = [...list as string[]]);
    db.list('plan/rightSqare2').valueChanges().subscribe(list => this.rightSqare2 = [...list as string[]]);
    db.list('plan/rightSqare3').valueChanges().subscribe(list => this.rightSqare3 = [...list as string[]]);
    db.list('plan/rightSqare4').valueChanges().subscribe(list => this.rightSqare4 = [...list as string[]]);
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    const plan: Plan = {
      allGuests: this.allGuests,
      leftSqare1: this.leftSqare1,
      leftSqare2: this.leftSqare2,
      leftSqare3: this.leftSqare3,
      leftSqare4: this.leftSqare4,
      middleCircle1: this.middleCircle1,
      middleCircle2: this.middleCircle2,
      middleCircle3: this.middleCircle3,
      rightSqare1: this.rightSqare1,
      rightSqare2: this.rightSqare2,
      rightSqare3: this.rightSqare3,
      rightSqare4: this.rightSqare4
    }
    this.store.writePlanData(plan);
  }
}
