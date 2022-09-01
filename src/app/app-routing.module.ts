import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NF404Component } from './components/nf404/nf404.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'todo', component: TodoComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: ':id', component: DetailCvComponent },
    ],
  },
  { path: 'word', component: MiniWordComponent },
  { path: 'color/:defaultColor', component: ColorComponent },
  { path: ':qqechose', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
