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
      leftSqare1: plan.leftSqare1,
      leftSqare2: plan.leftSqare2,
      leftSqare3: plan.leftSqare3,
      leftSqare4: plan.leftSqare4,
      middleCircle1: plan.middleCircle1,
      middleCircle2: plan.middleCircle2,
      middleCircle3: plan.middleCircle3,
      rightSqare1: plan.rightSqare1,
      rightSqare2: plan.rightSqare2,
      rightSqare3: plan.rightSqare3,
      rightSqare4: plan.rightSqare4
    });
  }
}
