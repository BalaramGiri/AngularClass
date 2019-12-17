import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpoloyeeComponent } from './empoloyee/empoloyee.component';
import { DepartmentComponent } from './department/department.component';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'employee',
    component: EmpoloyeeComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)  //lazy loading..
  },
  {
    path: '',
    redirectTo: 'login',//home/route 
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
