import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControlService } from './form-control.service';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;
  controlList: any = [];
  payLoad: any;

  constructor(
    private _formControlService: FormControlService,
    private _dynamicFormService: DynamicFormService
  ) { }

  ngOnInit() {
    this.controlList = this._dynamicFormService.getFormControl();
    this.form = this._formControlService.toFormGroup(this.controlList);
  }

  onSubmit(f: NgForm) {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
