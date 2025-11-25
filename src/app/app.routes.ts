import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },          // This is your default "home"
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact }
];
