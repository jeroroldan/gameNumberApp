import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayGameComponent } from './pages/play-game/play-game.component';



const routes: Routes  = [
  {
    path:'',
    children: [
      { path: 'playGame', component: PlayGameComponent },
      { path: '**' , redirectTo: 'playGame' }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class GameRoutingModule { }