import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

// import { ProfilePage } from '../profile/profile.page';
// import { TruckPage } from '../truck/truck.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs/profile',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: '',
          redirectTo: 'tabs/profile',
          pathMatch: 'full'
        },
        {
          path: 'profile',
          loadChildren: '../pages/secure/profile/profile.module#ProfilePageModule'
        },
        {
          path: 'truck',
          loadChildren: '../pages/secure/truck/truck.module#TruckPageModule'
        }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
