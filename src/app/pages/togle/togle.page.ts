import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-togle',
  templateUrl: './togle.page.html',
  styleUrls: ['./togle.page.scss'],
})
export class ToglePage implements OnInit {
  marcado : boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
