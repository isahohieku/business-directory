import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'businesses',
        component: BusinessesComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    }
];

export { routes };
