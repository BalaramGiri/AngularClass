import { LoginService } from "../../login/Service/login-service.service";
import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../valueprovider/appconfig.service';

export let todoServiceFactory = (loginService: LoginService, http: HttpClient ) => {
    return new TodoService(loginService.isAdmin, http, APP_CONFIG)
}