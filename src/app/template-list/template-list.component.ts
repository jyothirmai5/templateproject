import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, TemplateModel } from '../app.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  public templateList?: any;

  constructor(private appService: AppService, public router: Router) { }

  ngOnInit() {
    this.templateList = this.appService.templateList;
  }

  redirectToCreate() {
    this.router.navigate(['create']);
  }

}
