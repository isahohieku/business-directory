import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { CoreComponent } from '../core/core.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: CoreComponent, loadChildren: '../core/core.module#CoreModule' }
        ]
    }
];
