import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { TemplatePreviewComponent } from './template-preview/template-preview.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    CreateTemplateComponent,
    TemplatePreviewComponent,
    TemplateListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
