import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      'rotating_card_profile.png',
      '1234',
      40
    ),
    new Cv(
      2,
      'sellaouti',
      'skan',
      'bb',
      'rotating_card_profile2.png',
      '12345',
      4
    ),
    new Cv(
      3,
      'ben salah',
      'ahmed',
      'dev',
      'rotating_card_profile3.png',
      '123456',
      20
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
