import { Component } from '@angular/core';
import { Vibration, VibrationOriginal } from '@ionic-native/vibration';
import { from } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(
    public navCtrl: NavController,
    public vibration: VibrationOriginal
  ) { }

  vibrate(){
    this.vibration.vibrate(1000);
  }
}