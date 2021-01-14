import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  nome: string = '';
  pessoas:any;
  pessoasFiltradas: any;
  constructor() { 
    this.pessoas= [
      {id:1, idade:13, nome: "Paulo"},
      {id:1, idade:13, nome: "Paula"},
      {id:1, idade:13, nome: "Ana Paula"},
      {id:1, idade:13, nome: "Paulo Rogério"},
      {id:1, idade:13, nome: "Rogério Marques"},
      {id:1, idade:13, nome: "Agatha"},
      {id:1, idade:13, nome: "Fernanda"},
      {id:1, idade:13, nome: "Maria Fernanda"},
      {id:1, idade:13, nome: "Ana"},
    ];
  }

  ngOnInit() {
  }

}
