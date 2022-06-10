import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductAddComponent } from './page/Products/product-add/product-add.component';
import { ProductComponent } from './page/Products/product/product.component';
import { SkillListComponent } from './page/skill/skill-list/skill-list.component';
import { SkillComponent } from './page/skill/skill/skill.component';
import { SigninComponent } from './page/Users/signin/signin.component';
import { SignupComponent } from './page/Users/signup/signup.component';
import { AuthGuard } from './rules/auth.guard';


const routes: Routes = [
  {
    path: "", component: HomepageComponent, children: [
      { path: "signup", component: SignupComponent },
      { path: "signin", component: SigninComponent },
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, canActivate: [AuthGuard], children: [
      { path: "product", component: ProductComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: "product/edit/:id", component: ProductAddComponent },
      { path: "skills", component: SkillListComponent},
      { path: "skills/add", component: SkillComponent},
      { path: "skills/edit/:id", component: SkillComponent}
    ]
  },

  { path: "**", component: NotFoundError }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
