import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule,
  SideComponent,
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AccountComponent } from './account/account.component';
import { BarchartComponent } from './dashboard/bar/barchart/barchart.component';
import { PiechartComponent } from './dashboard/pie/piechart/piechart.component';
import { LinechartComponent } from './dashboard/line/linechart/linechart.component';
import { DoughnutComponent } from './dashboard/doughnut/doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';
import { MlmodelComponent } from './mlmodel/mlmodel.component';
import { PaymentComponent } from './payment/payment.component';
import { ProjectComponent } from './project/project.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, SideComponent, 
    DashboardComponent, ProfileComponent, AccountComponent,
     BarchartComponent, PiechartComponent, DoughnutComponent, LinechartComponent, MlmodelComponent, PaymentComponent, ProjectComponent, NewsComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ChartsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
