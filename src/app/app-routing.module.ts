import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrartPlayPageComponent } from './screen-init/strart-play-page/strart-play-page.component';

const routes: Routes = [
  {
    path: 'welcome', component: StrartPlayPageComponent
  },
  {
    path: 'game',
    loadChildren:() => import('../app/game-app/game-app.module').then(m => m.GameAPPModule )
  },
  {
    path: '**', redirectTo:'welcome'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
