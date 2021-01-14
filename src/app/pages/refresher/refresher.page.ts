import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event){
    console.log('Usuario pediu para atualizar');

    setTimeout(() =>{
         console.log('operação realizada com sucesso')
         event.target.complete();
    },2000);
  }

}
