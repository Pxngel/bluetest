import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteractionPageRoutingModule } from './interaction-routing.module';

import { InteractionPage } from './interaction.page';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteractionPageRoutingModule
  ],
  declarations: [InteractionPage],
  providers:[BluetoothSerial]
})
export class InteractionPageModule {}
