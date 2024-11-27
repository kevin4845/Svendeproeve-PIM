import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ECatalogComponent } from './pages/e-catalog/e-catalog.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './pages/login/login.component';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductModalComponent } from './modals/add-product-modal/add-product-modal.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserModalComponent } from './modals/add-user-modal/add-user-modal.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { VariantsComponent } from './pages/variants/variants.component';
import { ProductFamiliesComponent } from './pages/product-families/product-families.component';
import { AddProductFamilyModalComponent } from './modals/add-product-family-modal/add-product-family-modal.component';
import { AddVariantModalComponent } from './modals/add-variant-modal/add-variant-modal.component';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { ProductFamilyModalComponent } from './modals/product-family-modal/product-family-modal.component';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { corsInterceptor } from './interceptors/cors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    SettingsComponent,
    ECatalogComponent,
    AppLayoutComponent,
    LoginComponent,
    AddProductModalComponent,
    AddUserModalComponent,
    VariantsComponent,
    ProductFamiliesComponent,
    AddProductFamilyModalComponent,
    AddVariantModalComponent,
    ProductFamilyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StyleClassModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    RouterModule,
    RouterOutlet,
    ChartModule,
    CardModule,
    TableModule,
    CarouselModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    CookieModule.withOptions(),
    DropdownModule,
    ImageModule
  ],
  providers: [
    DialogService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    provideHttpClient(withInterceptors([tokenInterceptor, corsInterceptor])),
    JwtHelperService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
