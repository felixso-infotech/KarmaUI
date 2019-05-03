/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//192.168.43.249:8075/KarmaApp';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
