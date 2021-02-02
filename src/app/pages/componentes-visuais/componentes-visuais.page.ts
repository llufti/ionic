import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {
  componentes :any[] = [];
  constructor(private nacCtrl : NavController) { 
  this.componentes = [
    {
      title: 'Navegação',
      url: 'navegacao',
      icon: 'mail'
    },
    {
      title: 'Botões',
      url: 'botao',
      icon: 'construct'
    },{
      title: 'Alert',
      url: 'alert',
      icon: 'construct'
    },{
      title: 'Actio-Shit',
      url: 'actionsheet',
      icon: 'construct'
    },{
      title: 'Badge',
      url: 'badge',
      icon: 'construct'
    },{
      title: 'Card',
      url: 'card',
      icon: 'construct'
    },{
      title: 'CheckBox',
      url: 'checkbox',
      icon: 'construct'
    },{
      title: 'Chip',
      url: 'chip',
      icon: 'construct'
    },{
      title: 'Content',
      url: 'content',
      icon: 'construct'
    },{
      title: 'Datetime',
      url: 'datetime',
      icon: 'construct'
    },{
      title: 'Fab',
      url: 'fab',
      icon: 'construct'
    },{
      title: 'Grid',
      url: 'grid',
      icon: 'construct'
    },{
      title: 'Infinit Scroll',
      url: 'infinitescroll',
      icon: 'construct'
    },{
      title: 'Input',
      url: 'input',
      icon: 'construct'
    },{
      title: 'List',
      url: 'list',
      icon: 'construct'
    },{
      title: 'Progress Bar',
      url: 'progressbar',
      icon: 'construct'
    },{
      title: 'Refresher',
      url: 'refresher',
      icon: 'construct'
    },{
      title: 'Reoder',
      url: 'reoder',
      icon: 'construct'
    },{
      title: 'Selected',
      url: 'selected',
      icon: 'construct'
    },{
      title: 'Togle',
      url: 'togle',
      icon: 'construct'
    },{
      title: 'Search Bar',
      url: 'searchbar',
      icon: 'construct'
    },{
      title: 'Search Bar',
      url: 'segment',
      icon: 'construct'
    },{
      title: 'Toast',
      url: 'toast',
      icon: 'construct'
    },{
      title: 'Modal',
      url: 'modal',
      icon: 'construct'
    },{
      title: 'Popover',
      url: 'popover',
      icon: 'construct'
    },{
      title: 'Animação',
      url: 'animacao',
      icon: 'construct'
    }
  ];
}
  ngOnInit() {
  }
  showPage(url : string){
     this.nacCtrl.navigateForward(url);
  }
}
