import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './page/Products/product/product.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';

import { ProductAddComponent } from './page/Products/product-add/product-add.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CategoryComponent } from './page/Categories/category/category.component';
import { SignupComponent } from './page/Users/signup/signup.component';
import { SigninComponent } from './page/Users/signin/signin.component';
import { HomepageComponent } from './page/homepage/homepage.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderAdminComponent,
    ProductComponent,
    ProductAddComponent,
    LayoutAdminComponent,
    CategoryComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent

  ],
  imports: [
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzFormModule,
    NzButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzPageHeaderModule,
    NzDropDownModule,
    NzTagModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
