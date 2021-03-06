/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.209.40.232:8060';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
