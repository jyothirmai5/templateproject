import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css'],
})
export class CreateTemplateComponent implements OnInit {
  public templateArray!: FormArray;
  public templateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router) { }

  ngOnInit() {
    this.templateForm = this.formBuilder.group({
      Templates: this.formBuilder.array([
      ])
    });
    this.templateArray = this.templateForm.get('Templates') as FormArray;
    if (this.appService.templateList) {
      this.fillData();
      this.addTemplateItem();
    } else {
      this.addTemplateItem();
    }
  }

  addTemplateItem(template?: any) {
    this.templateArray.push(this.newTemplateItem(template));
  }

  newTemplateItem(template?: any): FormGroup {
    if (template) {
      return this.formBuilder.group({
        Name: new FormControl(template.Name, [Validators.required]),
        Label: new FormControl(template.Label, [Validators.required]),
        Placeholder: new FormControl(template.Placeholder, [Validators.required])
      });
    } else {
      return this.formBuilder.group({
        Name: new FormControl('', [Validators.required]),
        Label: new FormControl('', [Validators.required]),
        Placeholder: new FormControl('', [Validators.required])
      });
    }
  }

  fillData() {
    this.appService.templateList.map((template: any) => {
      this.addTemplateItem(template);
    });
  }

  removeTemplateItem(index: number) {
    this.templateArray.removeAt(index);
  }

  redirectToTemplateList() {
    if (this.templateForm.valid) {
      this.router.navigate(['']);
      this.appService.templateList = this.templateArray.value;
    }
  }

  redirectToTemplatePreview() {
    if (this.templateForm.valid) {
      this.router.navigate(['preview']);
      this.appService.templateList = this.templateArray.value;
    }
  }

}
