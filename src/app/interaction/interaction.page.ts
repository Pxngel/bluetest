import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.page.html',
  styleUrls: ['./interaction.page.scss'],
})
export class InteractionPage implements OnInit {

  constructor(
    private bluettho:BluetoothSerial,
    private toast:ToastController
  ) { }

  ngOnInit() {
  }
  

  send(data:any){
    this.bluettho.write(data).then(async (res)=>{
      const alerta =  await this.toast.create({
        message:"Orden mandada al dispositivo",
        color:"success",
        duration:3000,

      })
      alerta.present()
    })
  }

}
