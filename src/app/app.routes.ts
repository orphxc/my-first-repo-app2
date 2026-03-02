import { Routes } from '@angular/router';
import { Home} from './home/home'
import { KantoComponent } from './Kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent }
];