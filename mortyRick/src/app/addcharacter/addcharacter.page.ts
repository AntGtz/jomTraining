import { Character } from '../models/character.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.page.html',
  styleUrls: ['./addcharacter.page.scss'],
})
export class AddcharacterPage implements OnInit {
  inputValue1: string = '';
  inputValue2: string = '';
  inputValue3: string = '';
  inputValue4: string = '';
  inputValue5: string = '';
  inputValue6: string = '';
  
  character: Character = {};
  // myObject = {
  //   Nombre: '', 
  //   Estado: '', 
  //   Especie: '', 
  //   Tipo: '',
  //   Genero: '',
  //   Planeta: ''
  // };
  constructor(
    private router: Router
    
  ) { }

  MostrarImpreso() {
    // console.log(this.inputValue1);
    // console.log(this.inputValue2);
    // console.log(this.inputValue3);
    // console.log(this.inputValue4);
    // console.log(this.inputValue5);
    // console.log(this.inputValue6);
    // this.myObject.Nombre = this.inputValue1;
    // this.myObject.Estado = this.inputValue2;
    // this.myObject.Especie = this.inputValue3;
    // this.myObject.Tipo = this.inputValue4;
    // this.myObject.Genero = this.inputValue5;
    // this.myObject.Planeta = this.inputValue6;
    console.log(this.character);
  }


  ngOnInit() {
  }

}
