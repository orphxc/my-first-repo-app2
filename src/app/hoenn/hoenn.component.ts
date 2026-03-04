import { Component } from '@angular/core';
import { HoennComponentServices } from '../hoenn.service';

@Component({
  selector: 'app-hoenn',
  imports: [HoennComponentServices],
  templateUrl: './hoenn.component.html',
  styleUrl: './hoenn.component.css'
})
export class HoennComponent {

}
