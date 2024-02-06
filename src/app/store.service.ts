import { Injectable } from '@angular/core';
import { Plan } from './table.model';
import { getDatabase, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  writePlanData(plan: Plan) {
    const db = getDatabase();
    set(ref(db, 'plan'), {
      allGuests: plan.allGuests,
      declined: plan.declined,
      leftSqare1: plan.leftSqare1,
      leftSqare1R: plan.leftSqare1R,
      leftSqare2: plan.leftSqare2,
      leftSqare2R: plan.leftSqare2R,
      leftSqare3: plan.leftSqare3,
      leftSqare3R: plan.leftSqare3R,
      leftSqare4: plan.leftSqare4,
      leftSqare4R: plan.leftSqare4R,
      leftSqare5: plan.leftSqare5,
      leftSqare5R: plan.leftSqare5R,
      middleCircle1: plan.middleCircle1,
      middleCircle1R: plan.middleCircle1R,
      middleCircle2: plan.middleCircle2,
      middleCircle2R: plan.middleCircle2R,
      middleCircle3: plan.middleCircle3,
      middleCircle3R: plan.middleCircle3R,
      rightSqare1: plan.rightSqare1,
      rightSqare1R: plan.rightSqare1R,
      rightSqare2: plan.rightSqare2,
      rightSqare2R: plan.rightSqare2R,
      rightSqare3: plan.rightSqare3,
      rightSqare3R: plan.rightSqare3R,
      rightSqare4: plan.rightSqare4,
      rightSqare4R: plan.rightSqare4R,
      rightSqare5: plan.rightSqare5,
      rightSqare5R: plan.rightSqare5R
    });
  }
}
