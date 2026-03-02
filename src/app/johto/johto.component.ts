import { Component, signal } from '@angular/core';
import { LeaderInfoComponent } from '../leader-info/leader-info.component';

interface GymLeader {
  name: string;
  age: number;
  location: string;
  team: string; 
  motto: string;
  badge: string;
}

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfoComponent],
  template: `
    <h2>Johto Gym Leaders</h2>
    <p>{{ activeMotto() }}</p>
    @for (leader of leaders; track leader.name) {
      <app-leader-info 
        [name]="leader.name" 
        [age]="leader.age"
        [location]="leader.location"
        [team]="leader.team" 
        [badge]="leader.badge"
        [motto]="leader.motto"
        (showMotto)="displayMotto($event)" />
    }
  `
})
export class JohtoComponent {
  activeMotto = signal('Select a leader to see their motto.');

  leaders: GymLeader[] = [
    { name: 'Falkner', age: 17, location: 'Violet City', team: 'Pidgey, Pidgeotto', badge: 'Zephyr', motto: 'The elegant master of flying Pokémon!' },
    { name: 'Bugsy', age: 15, location: 'Azalea Town', team: 'Scyther, Metapod, Kakuna', badge: 'Hive', motto: 'The walking Bug Pokémon encyclopedia!' },
    { name: 'Whitney', age: 19, location: 'Goldenrod City', team: 'Clefairy, Miltank', badge: 'Plain', motto: 'The incredibly pretty girl!' },
    { name: 'Morty', age: 27, location: 'Ecruteak City', team: 'Gastly, Haunter, Gengar', badge: 'Fog', motto: 'The mystic with the future-seeing eye!' },
    { name: 'Chuck', age: 39, location: 'Cianwood City', team: 'Primeape, Poliwrath', badge: 'Storm', motto: 'His roaring fists do the talking!' },
    { name: 'Jasmine', age: 21, location: 'Olivine City', team: 'Magnemite, Steelix', badge: 'Mineral', motto: 'The iron-clad girl with a gentle heart!' },
    { name: 'Pryce', age: 63, location: 'Mahogany Town', team: 'Seel, Dewgong, Piloswine', badge: 'Glacier', motto: 'The teacher of winter\'s harshness!' },
    { name: 'Clair', age: 27, location: 'Blackthorn City', team: 'Dragonair, Kingdra', badge: 'Rising', motto: 'The blessed user of dragon Pokémon!' }
];



  displayMotto(motto: string) {
    this.activeMotto.set(motto);
  }
}
