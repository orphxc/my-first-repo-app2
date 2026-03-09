import { Component, inject } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';
import { HoennComponentServices } from '../hoenn.service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [LeaderInfoComponent], 
  templateUrl: './hoenn.component.html',
  styleUrl: './hoenn.component.css'
})
export class HoennComponent {
  private hoennService = inject(HoennComponentServices);
  

  hoennLeaders = this.hoennService.getHoennLeaders();
  

  activeMotto = this.hoennService.activeMotto;
  

  displayMotto(motto: string) {
    this.hoennService.activeMotto.set(motto);
  }
}