import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MES_ROUTES } from '../../config/routes.config';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.cvService.findCvById(+params['id']);
      if (!this.cv) {
        this.router.navigate([MES_ROUTES.cv]);
      }
    });
  }
  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([MES_ROUTES.cv]);
    }
  }
}
