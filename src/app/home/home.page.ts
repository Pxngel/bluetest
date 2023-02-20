import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  Devices!:any;
  constructor(
    private bluettho:BluetoothSerial,
    private alert:ToastController,
    private router:Router
  ) {}

  connect(id:string){
    this.bluettho.connect(id).subscribe(async (res) =>{
     const alerta =  await this.alert.create({
        message:"Dispositivo conectado",
        color:"primary",
        duration:3000,

      })
      alerta.present()
      this.router.navigateByUrl("/interaction")
    })
  }

  search(){
  this.bluettho.isEnabled().then((res) =>{
    this.bluettho.list().then((res)=>{
      this.Devices=res
     })
  })
  }

  ngOnInit(): void {
    this.search();
  }

}
