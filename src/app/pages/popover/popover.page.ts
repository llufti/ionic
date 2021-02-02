import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalInternoComponent } from 'src/app/components/modal-interno/modal-interno.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController : PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ModalInternoComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
