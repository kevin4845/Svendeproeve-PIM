import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ECatalogComponent } from './pages/e-catalog/e-catalog.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { VariantsComponent } from './pages/variants/variants.component';
import { ProductFamiliesComponent } from './pages/product-families/product-families.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
  { path: 'ecatalog', component: ECatalogComponent },
  { path: '', component: AppLayoutComponent, canActivate: [authGuard], children: [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'variants', component: VariantsComponent },
    { path: 'families', component: ProductFamiliesComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
