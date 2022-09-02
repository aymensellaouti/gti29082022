import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  private cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', '1234', 40),
    new Cv(2, 'sellaouti', 'skan', 'bb', '', '12345', 4),
    new Cv(
      3,
      'ben salah',
      'ahmed',
      'dev',
      '                     ',
      '123456',
      20
    ),
  ];
  constructor() {}
  getCvs(): Cv[] {
    return this.cvs;
  }
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
