import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'business/:id',
        component: BusinessComponent
    }
];

export { routes };
