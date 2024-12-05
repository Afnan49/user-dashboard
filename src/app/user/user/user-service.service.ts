import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserDB } from './user-model';
import {
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private db = inject(Firestore);

  // ===========================< GET ALL USERS >========================
  userCollection = collection(this.db, 'users');

  getAllUsers(): Observable<UserDB> {
    return collectionData(this.userCollection, { idField: 'docId' });
  }
  // ===========================< GET USER BY ID >======================
  getUserDoc(id: string): Observable<UserDB> {
    const userDoc = doc(this.db, 'users', id);
    return docData(userDoc);
  }
}
