import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PlayGameComponent } from './pages/play-game/play-game.component';
import { RouterModule } from '@angular/router';
import { GameRoutingModule } from './game-routing.module';
import { InputFocusDirective } from '../shared/directives/input-focus.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GamePageComponent,
    PlayGameComponent,
    InputFocusDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    GameRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    InputFocusDirective
  ]
})
export class GameAPPModule { }
