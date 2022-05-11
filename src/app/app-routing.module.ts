import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplatePreviewComponent } from './template-preview/template-preview.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateListComponent,
  },
  {
    path: 'create',
    component: CreateTemplateComponent,
  },
  {
    path: 'preview',
    component: TemplatePreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
