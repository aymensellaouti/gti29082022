import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  now = new Date();
  cvs: Cv[] = [
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
  /*   sayHelloService = new SayHelloService();
   */ constructor(
    private logger: LoggerService,
    private sayHelloService: SayHelloService
  ) {}

  ngOnInit(): void {
    this.logger.log('cc je suis le CvComponent');
    this.sayHelloService.hello();
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
