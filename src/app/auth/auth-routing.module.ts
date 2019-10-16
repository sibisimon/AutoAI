import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { AuthGuard } from './auth-guard.service';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';
import { ProjectComponent } from '../project/project.component';
import { NewsComponent } from '../news/news.component';
import { PaymentComponent } from '../payment/payment.component';
import { MlmodelComponent } from '../mlmodel/mlmodel.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: "profile",
        component: ProfileComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: "projects",
        component: ProjectComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: "mlmodels",
        component: MlmodelComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: "news",
        component: NewsComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: "payments",
        component: PaymentComponent,
        canActivate: [ AuthGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
