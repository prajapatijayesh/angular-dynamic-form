import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class DynamicFormService {
    constructor() { }

    getFormControl() {
        return [{
            key: 'name',
            label: 'Name',
            required: true,
            value: '',
            order: 1,
            controlType: 'textbox'
        }, {
            key: 'address',
            label: 'Address',
            required: true,
            value: '',
            order: 1,
            controlType: 'textbox'
        }, {
            key: 'city',
            label: 'City',
            required: true,
            value: '',
            order: 1,
            controlType: 'textbox'
        }, {
            key: 'state',
            label: 'State',
            required: true,
            value: '',
            order: 1,
            controlType: 'textbox'
        }];
    }
}