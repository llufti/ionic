import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    alert.present();
  }
  async multiple() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Voltar', 'Salvar', 'Cancelar']
    });
    alert.present();
  }
  async confirme() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    alert.present();
  }
  async prompt() {
    const alert = await this.alertCtrl.create(
      {

        header: 'Acesso Restrito!',
        inputs: [
          {
            name: 'E-Mail',
            type: 'text',
            placeholder: 'Informe seu e-mail!'
          },
          {
            name: 'name2',
            type: 'password',           
            placeholder: 'Informe seu email'
          },          
          
        ],
        buttons: [
          {
            text : 'Cancel',
            role:'cancel',
            cssClass: 'secondary',
            handler: () =>{
              console.log('Confirme Cancel')
            }
          },{
            text:'Ok',
            handler: (form) =>{
              console.log(form)
            }
          }
        ]
      });
      alert.present();
  }
}
