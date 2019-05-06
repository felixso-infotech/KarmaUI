/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.196.249.196:8075/KarmaApp';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
