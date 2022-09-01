import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SommeComponent } from './components/somme/somme.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { NgStyleExampleComponent } from './directives/ng-style-example/ng-style-example.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgClassExampleComponent } from './directives/ng-class-example/ng-class-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { BtcUsdPipe } from './pipes/btc-usd.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { TodoComponent } from './todo/todo/todo.component';
import { ToastrModule } from 'ngx-toastr';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    SommeComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CvCardComponent,
    NgStyleExampleComponent,
    MiniWordComponent,
    NgClassExampleComponent,
    HighlightDirective,
    RainbowDirective,
    BtcUsdPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    NavbarComponent,
    RouterSimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
