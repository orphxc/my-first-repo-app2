import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  templateUrl: './leader-info.component.html',
  styleUrls: ['./leader-info.component.css']
})
export class LeaderInfoComponent {
  name = input.required<string>();
  location = input.required<string>();
  team = input.required<string>();
  badge = input.required<string>();
  motto = input.required<string>();
  age = input.required<number>();

  showMotto = output<string>();


  getTeamArray(): string[] {
    return this.team().split(',').map(item => item.trim());
  }

 
  getTeamGrid(): string[] {
    const items = this.getTeamArray();
    const padded = [...items];
    while (padded.length < 8) {
      padded.push(''); 
    }
    return padded;
  }

  triggerMotto() {
    this.showMotto.emit(this.motto());
  }
}

