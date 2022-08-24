import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-strart-play-page',
  templateUrl: './strart-play-page.component.html',
  styleUrls: ['./strart-play-page.component.scss']
})
export class StrartPlayPageComponent implements OnInit {
  userName: string = ''
  public startText: string = 'Empezar';
  public welcomeUserText: string =  'Bienvenido a la plataforma para jugar';
  public textPush: string = 'Apriete el boton para empezar a jugar';

  constructor( private service: ServicesService ) { }

  ngOnInit( ): void {
  }


  get validationNameUser(){
    if(this.userName.length <= 3){
      return true
    }
    return false
  }

  sendNameUser(){
    this.service.userNameObservable$.next(this.userName)
  }

}
