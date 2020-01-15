import { InjectionToken } from '@angular/core';
import { IAppConfig } from './appconfig';
import { environment } from '../../environments/environment';
export const APP_SERVICE = new InjectionToken<IAppConfig>('app.config');

export const APP_CONFIG : IAppConfig = {
    apiEndPoint : environment.apiEndPoint
}