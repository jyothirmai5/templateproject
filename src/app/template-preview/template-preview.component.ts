import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, TemplateModel } from '../app.service';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.css']
})
export class TemplatePreviewComponent implements OnInit {
  public templateList?: any;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.templateList = this.appService.templateList;
  }

  navigateToCreateTemplate() {
    this.router.navigate(['create']);
  }

}