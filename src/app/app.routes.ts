import { Routes } from '@angular/router';
import { HarePageComponent } from './pages/hero/hare-page.component/hare-page.component';
import { CounterPageComponent } from './pages/counter/counter-page.component/counter-page.component';

export const routes: Routes = [
  {
    path: 'hero',
    component: HarePageComponent,
  },
  {
    path: '',
    component: CounterPageComponent,
  }
];
