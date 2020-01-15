import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MovieComponent } from './movie/movie.component';
// import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MovieAddComponent } from './movie/movie-add/movie-add.component';
// import { MovieAddFormComponent } from './movie/movie-add-form/movie-add-form.component';
// import { MovieArrayComponent } from './movie/movie-array/movie-array.component';
import { EmpoloyeeComponent } from './empoloyee/empoloyee.component';
import { DepartmentComponent } from './department/department.component';
import { MovieModule } from './movie/movie.module';
import { EmployeeModule } from './empoloyee/employee.module';
import { DepartmentModule } from './department/department.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PostsModule } from './posts/posts.module';
import {CommentsModule} from './comments/comments.module';
import { TodoModule } from './todo/todo.module';
import { APP_SERVICE, APP_CONFIG } from './valueprovider/appconfig.service';
import { TableComponent } from './table/table.component';
//import { CoreModule } from 'core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//import { NamePipe } from './pipes/name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // MovieComponent,
    // MovieListComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LoginComponent,
    MainNavComponent,
    TableComponent
    //NamePipe,
    // MovieAddComponent,
    // MovieAddFormComponent,
    // MovieArrayComponent,
    //EmpoloyeeComponent,
    //DepartmentComponent
  ],
  imports: [
    BrowserModule,
    PostsModule,
    CommentsModule,
    TodoModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    //CoreModule,
   // MovieModule,
    EmployeeModule,
    DepartmentModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide : APP_SERVICE, useValue : APP_CONFIG }
  ],
  //exports:[NamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
