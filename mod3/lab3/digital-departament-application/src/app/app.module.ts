import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowNameComponent } from './show-name/show-name.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';
import { DataService } from './core/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ItalicDirective } from './core/directive/italic.directive';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component, canActivate: [confirmInGuard]},
  { path: 'page3', component: Page3Component, canDeactivate: [confirmOutGuard]},
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    NotFoundComponent,
    ShowNameComponent,
    ItalicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
