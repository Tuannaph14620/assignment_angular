import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AppComponent } from './app.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { InfoAddComponent } from './page/info/info-add/info-add.component';
import { InfoComponent } from './page/info/info/info.component';
import { ProductAddComponent } from './page/Products/product-add/product-add.component';
import { ProductComponent } from './page/Products/product/product.component';
import { ProjectAddComponent } from './page/project/project-add/project-add.component';
import { ProjectComponent } from './page/project/project/project.component';
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
      { path: "skills/edit/:id", component: SkillComponent},
      { path: "info" , component:InfoComponent},
      { path: "info/add" , component:InfoAddComponent},
      { path: "info/edit/:id" , component:InfoAddComponent},
      { path: "project" , component: ProjectComponent},
      { path: "project/add" , component: ProjectAddComponent},
      { path: "project/edit/:id" , component:  ProjectAddComponent},
    ]
  },

  { path: "**", component: NotFoundError }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
