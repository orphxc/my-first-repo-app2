import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  templateUrl: './leader-info.component.html'
})
export class LeaderInfoComponent {
  name = input.required<string>();
  location = input.required<string>();
  team = input.required<string>();
  badge = input.required<string>();
  motto = input.required<string>();
  age = input.required<number>();

  showMotto = output<string>();

  triggerMotto() {
    this.showMotto.emit(this.motto());
  }
}
