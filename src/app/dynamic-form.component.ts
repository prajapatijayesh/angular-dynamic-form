import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent {
    @Input() control;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.control.key].valid; }
}