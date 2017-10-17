import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';

import { FormControlService } from './form-control.service';
import { DynamicFormService } from './dynamic-form.service';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    FormControlService,
    DynamicFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
