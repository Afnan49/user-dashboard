import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserDB } from './user-model';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
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
  private httpClient = inject(HttpClient);

  // ===========================< UPLOAD USER IMAGE >======================
  uploadImage(valus: any): Observable<any> {
    let data = valus;
    return this.httpClient.post(
      `https://api.cloudinary.com/v1_1/dou5mcich/image/upload`,
      data
    );
  }
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
  // ===========================< ADD USER DOC >======================
  addUserDoc(user: UserDB) {
    addDoc(this.userCollection, user);
  }
  // ===========================< REMOVE USER DOC >======================
  removeUserDoc(id: string) {
    const userDoc = doc(this.db, 'users', id);
    return deleteDoc(userDoc);
  }
}
