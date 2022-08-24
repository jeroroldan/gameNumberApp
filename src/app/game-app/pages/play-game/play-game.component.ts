import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/services.service';
import { userTexts } from '../../interfaces/userTexts';


@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
      chosenNumber:['', Validators.required ]
  });

  public nameUser: string = '';
  public numberRandom: number = 0
  public minNumber: number = 1;
  public maxNumber: number = 100;
  public numberChoose!: number;
  public calcNumberRandom: number = Math.floor( Math.random()  * this.maxNumber - this.minNumber +1 ) + 1;
  public result: string = '';
  public isNumberCorrect : boolean = false ;
  
  userTexts: userTexts = {
    messageNumberMin: `El numero que ingreso es mas bajo`,
    messageNumberMax: 'El numbero que ingreso es mas alto',
    defaultText:`Debe ingresar un numero entre 1 o 100`,
    messageNumberCorrect: 'Adivino el número felicitaciones'
  }
  

  constructor( private fb:FormBuilder, private service:ServicesService, private routes:Router ) { }

  ngOnInit(): void {
    this.service.userNameObservable$.subscribe(val => {
      this.nameUser = val;
    })
  }

  generateNumberRandom(){
    this.isNumberCorrect = false;
    this.routes.navigateByUrl('/')
    return this.calcNumberRandom = Math.floor( Math.random()  * this.maxNumber - this.minNumber +1 ) + 1;
  }

  get validationAlert(){
    if(this.result.length > 0){
      return true;
    }
    return false;
  }

  calc(){
    let vauleField = this.myForm.get('chosenNumber')?.value;

    if( vauleField >= this.minNumber && this.numberRandom <= this.maxNumber  ){
      if( vauleField < this.calcNumberRandom ){
        this.result = this.userTexts.messageNumberMin;
        this.myForm.get('chosenNumber')?.setValue('');
        this.numberChoose = vauleField;
      }else if( vauleField > this.calcNumberRandom && vauleField <= this.maxNumber ){
        this.result = this.userTexts.messageNumberMax;
        this.myForm.get('chosenNumber')?.setValue('');
        this.numberChoose = vauleField;
      }else if( vauleField === this.calcNumberRandom   ){
        this.isNumberCorrect = true;
        this.result = this.userTexts.messageNumberCorrect;
        this.numberChoose = vauleField;
        this.myForm.get('chosenNumber')?.setValue('');
      }else if( vauleField > 100 ){
        this.result = this.userTexts.defaultText ;
        this.numberChoose = vauleField;
      }
    }
  }

}
