import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {

    constructor() { }

    toFormGroup(ctrls: any[]) {
        let group: any = {};

        ctrls.forEach(ctrl => {
            group[ctrl.key] = ctrl.required ?
                new FormControl(ctrl.value || '', Validators.required) :
                new FormControl(ctrl.value || '');
        });

        return new FormGroup(group);
    }
}