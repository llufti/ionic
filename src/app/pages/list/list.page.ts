import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  fruta : string[] = ["Abacaxi", "Melão", "Mandioca"];
  constructor() { }
  
  ngOnInit() {
  }

}
