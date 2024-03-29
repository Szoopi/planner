import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
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
  declined: string[] = [];
  leftSqare1: string[] = [];
  leftSqare1R: string[] = [];
  leftSqare2: string[] = [];
  leftSqare2R: string[] = [];
  leftSqare3: string[] = [];
  leftSqare3R: string[] = [];
  leftSqare4: string[] = [];
  leftSqare4R: string[] = [];
  leftSqare5: string[] = [];
  leftSqare5R: string[] = [];
  middleCircle1: string[] = [];
  middleCircle1R: string[] = [];
  middleCircle2: string[] = [];
  middleCircle2R: string[] = [];
  middleCircle3: string[] = [];
  middleCircle3R: string[] = [];
  rightSqare1: string[] = [];
  rightSqare1R: string[] = [];
  rightSqare2: string[] = [];
  rightSqare2R: string[] = [];
  rightSqare3: string[] = [];
  rightSqare3R: string[] = [];
  rightSqare4: string[] = [];
  rightSqare4R: string[] = [];
  rightSqare5: string[] = [];
  rightSqare5R: string[] = [];


  constructor(private store: StoreService, db: AngularFireDatabase) {
    db.list('plan/allGuests').valueChanges().subscribe(list => this.allGuests = [...list as string[]]);
    db.list('plan/declined').valueChanges().subscribe(list => this.declined = [...list as string[]]);
    db.list('plan/leftSqare1').valueChanges().subscribe(list => this.leftSqare1 = [...list as string[]]);
    db.list('plan/leftSqare1R').valueChanges().subscribe(list => this.leftSqare1R = [...list as string[]]);
    db.list('plan/leftSqare2').valueChanges().subscribe(list => this.leftSqare2 = [...list as string[]]);
    db.list('plan/leftSqare2R').valueChanges().subscribe(list => this.leftSqare2R = [...list as string[]]);
    db.list('plan/leftSqare3').valueChanges().subscribe(list => this.leftSqare3 = [...list as string[]]);
    db.list('plan/leftSqare3R').valueChanges().subscribe(list => this.leftSqare3R = [...list as string[]]);
    db.list('plan/leftSqare4').valueChanges().subscribe(list => this.leftSqare4 = [...list as string[]]);
    db.list('plan/leftSqare4R').valueChanges().subscribe(list => this.leftSqare4R = [...list as string[]]);
    db.list('plan/leftSqare5').valueChanges().subscribe(list => this.leftSqare5 = [...list as string[]]);
    db.list('plan/leftSqare5R').valueChanges().subscribe(list => this.leftSqare5R = [...list as string[]]);
    db.list('plan/middleCircle1').valueChanges().subscribe(list => this.middleCircle1 = [...list as string[]]);
    db.list('plan/middleCircle1R').valueChanges().subscribe(list => this.middleCircle1R = [...list as string[]]);
    db.list('plan/middleCircle2').valueChanges().subscribe(list => this.middleCircle2 = [...list as string[]]);
    db.list('plan/middleCircle2R').valueChanges().subscribe(list => this.middleCircle2R = [...list as string[]]);
    db.list('plan/middleCircle3').valueChanges().subscribe(list => this.middleCircle3 = [...list as string[]]);
    db.list('plan/middleCircle3R').valueChanges().subscribe(list => this.middleCircle3R = [...list as string[]]);
    db.list('plan/rightSqare1').valueChanges().subscribe(list => this.rightSqare1 = [...list as string[]]);
    db.list('plan/rightSqare1R').valueChanges().subscribe(list => this.rightSqare1R = [...list as string[]]);
    db.list('plan/rightSqare2').valueChanges().subscribe(list => this.rightSqare2 = [...list as string[]]);
    db.list('plan/rightSqare2R').valueChanges().subscribe(list => this.rightSqare2R = [...list as string[]]);
    db.list('plan/rightSqare3').valueChanges().subscribe(list => this.rightSqare3 = [...list as string[]]);
    db.list('plan/rightSqare3R').valueChanges().subscribe(list => this.rightSqare3R = [...list as string[]]);
    db.list('plan/rightSqare4').valueChanges().subscribe(list => this.rightSqare4 = [...list as string[]]);
    db.list('plan/rightSqare4R').valueChanges().subscribe(list => this.rightSqare4R = [...list as string[]]);
    db.list('plan/rightSqare5').valueChanges().subscribe(list => this.rightSqare5 = [...list as string[]]);
    db.list('plan/rightSqare5R').valueChanges().subscribe(list => this.rightSqare5R = [...list as string[]]);
  }

  currentFilledPlaces() {
    return this.leftSqare1.length +
      this.leftSqare1R.length +
      this.leftSqare2.length +
      this.leftSqare2R.length +
      this.leftSqare3.length +
      this.leftSqare3R.length +
      this.leftSqare4.length +
      this.leftSqare4R.length +
      this.leftSqare5.length +
      this.leftSqare5R.length +
      this.middleCircle1.length +
      this.middleCircle1R.length +
      this.middleCircle2.length +
      this.middleCircle2R.length +
      this.middleCircle3.length +
      this.middleCircle3R.length +
      this.rightSqare1.length +
      this.rightSqare1R.length +
      this.rightSqare2.length +
      this.rightSqare2R.length +
      this.rightSqare3.length +
      this.rightSqare3R.length +
      this.rightSqare4.length +
      this.rightSqare4R.length +
      this.rightSqare5.length +
      this.rightSqare5R.length;
  }

  squarePredicate(item: CdkDrag, container: CdkDropList) {
    if (container.data.length < 4) {
      return true;
    } else {
      return false;
    }
  }

  circlePredicate(item: CdkDrag, container: CdkDropList) {
    if (container.data.length < 6) {
      return true;
    } else {
      return false;
    }
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
      declined: this.declined,
      leftSqare1: this.leftSqare1,
      leftSqare1R: this.leftSqare1R,
      leftSqare2: this.leftSqare2,
      leftSqare2R: this.leftSqare2R,
      leftSqare3: this.leftSqare3,
      leftSqare3R: this.leftSqare3R,
      leftSqare4: this.leftSqare4,
      leftSqare4R: this.leftSqare4R,
      leftSqare5: this.leftSqare5,
      leftSqare5R: this.leftSqare5R,
      middleCircle1: this.middleCircle1,
      middleCircle1R: this.middleCircle1R,
      middleCircle2: this.middleCircle2,
      middleCircle2R: this.middleCircle2R,
      middleCircle3: this.middleCircle3,
      middleCircle3R: this.middleCircle3R,
      rightSqare1: this.rightSqare1,
      rightSqare1R: this.rightSqare1R,
      rightSqare2: this.rightSqare2,
      rightSqare2R: this.rightSqare2R,
      rightSqare3: this.rightSqare3,
      rightSqare3R: this.rightSqare3R,
      rightSqare4: this.rightSqare4,
      rightSqare4R: this.rightSqare4R,
      rightSqare5: this.rightSqare5,
      rightSqare5R: this.rightSqare5R
    }
    this.store.writePlanData(plan);
  }
}
