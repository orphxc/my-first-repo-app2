import { Injectable, signal } from '@angular/core';

export interface HoennGymLeader {
  name: string;
  age: number;
  location: string;
  team: string;
  badge: string;
  specialty: string;
  motto: string;
}

@Injectable({
  providedIn: 'root'
})
export class HoennComponentServices {
  
  // Add activeMotto signal to service
  activeMotto = signal('Select a leader to see their motto.');

  private hoennLeaders = signal<HoennGymLeader[]>([
    { 
      name: 'Roxanne', 
      age: 18, 
      location: 'Rustboro City', 
      team: 'Nosepass, Geodude, Graveler', 
      badge: 'Stone', 
      specialty: 'Rock', 
      motto: 'The tough rock of the gym!' 
    },
    { 
      name: 'Brawly', 
      age: 22, 
      location: 'Dewford Town', 
      team: 'Makuhita, Hariyama, Slaking', 
      badge: 'Knuckle', 
      specialty: 'Fighting', 
      motto: 'Punching through the competition!' 
    },
    { 
      name: 'Winona', 
      age: 25, 
      location: 'Mossdeep City', 
      team: 'Swinub, Swablu, Altaria, Skarmory', 
      badge: 'Feather', 
      specialty: 'Flying', 
      motto: 'Soaring above the rest!' 
    },
    { 
      name: 'Tate & Liza', 
      age: 10, 
      location: 'Mossdeep City', 
      team: 'Lunatone, Solrock, Baltoy, Claydol', 
      badge: 'Mind', 
      specialty: 'Psychic', 
      motto: 'Two minds, one victory!' 
    },
    { 
      name: 'Norman', 
      age: 35, 
      location: 'Petalburg City', 
      team: 'Slaking, Slakoth, Vigoroth', 
      badge: 'Ribbon', 
      specialty: 'Normal', 
      motto: 'The father of the gym!' 
    },
    { 
      name: 'Slate', 
      age: 28, 
      location: 'Fortree City', 
      team: 'Tropius, Swablu, Altaria', 
      badge: 'Rain', 
      specialty: 'Grass', 
      motto: 'Growing stronger every day!' 
    },
    { 
      name: 'Flannery', 
      age: 11, 
      location: 'Lavaridge Town', 
      team: 'Numel, Camerupt, Slugma', 
      badge: 'Heat', 
      specialty: 'Fire', 
      motto: 'Hot-headed and ready to fight!' 
    },
    { 
      name: 'Wattson', 
      age: 40, 
      location: 'Mauville City', 
      team: 'Magnemite, Magneton, Voltorb, Electrode', 
      badge: 'Dynamo', 
      specialty: 'Electric', 
      motto: 'Electric shock to the system!' 
    },
    { 
      name: 'Wallace', 
      age: 30, 
      location: 'Pacifidlog Town', 
      team: 'Luvdisc, Seaking, Gorebyss, Milotic', 
      badge: 'Rain', 
      specialty: 'Water', 
      motto: 'The beauty of the sea!' 
    },
    { 
      name: 'Juan', 
      age: 55, 
      location: 'Pacifidlog Town', 
      team: 'Luvdisc, Golduck, Politoed', 
      badge: 'Petal', 
      specialty: 'Water', 
      motto: 'The old master of water!' 
    }
  ]);

  getHoennLeaders() {
    return this.hoennLeaders.asReadonly();
  }

  // Fixed return type
  getLeaderByName(name: string): HoennGymLeader | undefined {
    return this.hoennLeaders().find(leader => leader.name === name);
  }
}