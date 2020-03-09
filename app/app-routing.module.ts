import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'password-code', loadChildren: './password-code/password-code.module#PasswordCodePageModule' },
  { path: 'password-success', loadChildren: './password-success/password-success.module#PasswordSuccessPageModule' },
  { path: 'userdb', canActivate: [AuthGuard], loadChildren: './userdb/userdb.module#UserdbPageModule' },
  { path: 'userpage', canActivate: [AuthGuard], loadChildren: './userpage/userpage.module#UserpagePageModule' },
  { path: 'profile', canActivate: [AuthGuard], loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'customers', canActivate: [AuthGuard], loadChildren: './customers/customers.module#CustomersPageModule' },
  { path: 'products', canActivate: [AuthGuard], loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'editprofile', canActivate: [AuthGuard], loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'editproduct/:id', loadChildren: './editproduct/editproduct.module#EditproductPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'viewproduct/:id/:category/:brand_name/:product_name/:product_img/:product_desc/:product_quantity/:product_srp', loadChildren: './viewproduct/viewproduct.module#ViewproductPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'storeproductview/:id/:category/:brand_name/:product_name/:product_img/:product_desc/:product_quantity/:product_srp/:product_cost/:user_id', loadChildren: './storeproductview/storeproductview.module#StoreproductviewPageModule' },
  { path: 'userstore/:user_id', loadChildren: './userstore/userstore.module#UserstorePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
