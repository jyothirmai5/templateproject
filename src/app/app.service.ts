import { Injectable } from '@angular/core';

export interface TemplateModel {
  Name: string;
  Label: string;
  Placeholder: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public templateList?: any;

  constructor() { }


}
