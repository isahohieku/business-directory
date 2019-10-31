import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CoreComponent } from '../core/core.component';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { SigninComponent } from '../admin/signin/signin.component';
import { AdminComponent } from '../admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: CoreComponent, loadChildren: '../core/core.module#CoreModule' }
        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', component: SigninComponent },
            { path: 'dashboard', component: AdminLayoutComponent, loadChildren: '../admin/admin.module#AdminModule' }
        ]
    }
];
