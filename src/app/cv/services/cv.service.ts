import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
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
  constructor() { }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
