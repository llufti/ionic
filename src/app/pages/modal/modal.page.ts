import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInternoComponent } from 'src/app/components/modal-interno/modal-interno.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInternoComponent,
      componentProps:{nome : 'Paulo josé'}
    });
    return await modal.present();
  }

}
