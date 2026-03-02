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
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfoComponent],
  template: `
    <h2>Kanto Gym Leaders</h2>
    <p>{{ activeMotto() }}</p>
    @for (leader of leaders; track leader.name) {
      <app-leader-info 
      [name]="leader.name" 
      [location]="leader.location" 
      [team]="leader.team" 
      [badge]="leader.badge" 
      [motto]="leader.motto" 
      [age]="leader.age" 
      (showMotto)="displayMotto($event)">
      </app-leader-info>

    }
  `
})
export class KantoComponent {
  activeMotto = signal('Select a leader to see their motto.');

  leaders: GymLeader[] = [
    { name: 'Brock', age: 15, location: 'Pewter City',  team: 'Geodude, Onix', badge: 'Boulder', motto: 'My resistance is as hard as rock!' },
    { name: 'Misty', age: 13, location: 'Cerulean City',  team: 'Staryu, Starmie', badge: 'Cascade', motto: 'The world-famous beauty!' },
    { name: 'Lt. Surge', age: 28, location: 'Vermilion City', team: 'Voltorb, Pikachu, Raichu', badge: 'Thunder', motto: 'The Lightning American!' },
    { name: 'Erika', age: 19, location: 'Celadon City',  team: 'Victreebel, Tangela, Vileplume', badge: 'Rainbow', motto: 'The Nature-Loving Princess!' },
    { name: 'Koga', age: 35, location: 'Fuchsia City', team: 'Koffing, Muk, Weezing', badge: 'Soul', motto: 'The Poisonous Ninja Master!' },
    { name: 'Sabrina', age: 21, location: 'Saffron City',  team: 'Kadabra, Mr. Mime, Alakazam', badge: 'Marsh', motto: 'The Master of Psychic Pokémon!' },
    { name: 'Blaine', age: 50, location: 'Cinnabar Island', team: 'Growlithe, Ponyta, Rapidash, Arcanine', badge: 'Volcano', motto: 'The Hot-Headed Quiz Master!' },
    { name: 'Giovanni', age: 42, location: 'Viridian City', team: 'Rhyhorn, Dugtrio, Nidoqueen, Nidoking, Rhydon', badge: 'Earth', motto: 'The Most Powerful Trainer!' }
];


  displayMotto(motto: string) {
    this.activeMotto.set(motto);
  }
}
