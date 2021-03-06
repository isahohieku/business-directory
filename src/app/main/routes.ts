import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CoreComponent } from '../core/core.component';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent } from '../admin/home/home.component';
import { AuthGuard } from '../admin/auth/guards/auth.guard';

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
            { path: '', component: HomeComponent },
        ]
    },
    {
        path: 'app',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: AdminComponent, loadChildren: '../admin/admin.module#AdminModule' }
        ]
    }
];
