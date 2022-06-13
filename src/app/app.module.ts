import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { SignupComponent } from './page/Users/signup/signup.component';
import { SigninComponent } from './page/Users/signin/signin.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { HeaderIndexComponent } from './components/header-index/header-index.component';
import { FooterIndexComponent } from './components/footer-index/footer-index.component';
import { SkillComponent } from './page/skill/skill/skill.component';
import { SkillListComponent } from './page/skill/skill-list/skill-list.component';
import { InfoComponent } from './page/info/info/info.component';
import { InfoAddComponent } from './page/info/info-add/info-add.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ProjectComponent } from './page/project/project/project.component';
import { ProjectAddComponent } from './page/project/project-add/project-add.component';
import { LayoutIndexComponent } from './layouts/layout-index/layout-index.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { SkillPageComponent } from './components/skill-page/skill-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactComponent } from './page/contact/contact/contact.component';
import { ContactAddComponent } from './page/contact/contact-add/contact-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderAdminComponent,
    ProductComponent,
    ProductAddComponent,
    LayoutAdminComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    HeaderIndexComponent,
    FooterIndexComponent,
    SkillComponent,
    SkillListComponent,
    InfoComponent,
    InfoAddComponent,
    ProjectComponent,
    ProjectAddComponent,
    LayoutIndexComponent,
    AboutPageComponent,
    ProjectPageComponent,
    SkillPageComponent,
    ContactPageComponent,
    ContactComponent,
    ContactAddComponent

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
    NzInputModule,
    


  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
