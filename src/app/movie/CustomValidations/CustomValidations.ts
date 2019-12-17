import { FormControl, AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
    static nameValidator(control: FormControl) {
        if (control.value.includes('test')) {
            return { invalidName: true };
        }
        return null;
    }

    static specialCharValidator(char: string) {

        return (control: AbstractControl) => {
            if (control.value.includes(char)) {
                return { invalidChar: true };
            }
            return null;
        }
    }

    static passwordValidator(form: FormGroup) {
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        if (password.value !== confirmPassword.value) {
            return { invalidPassword: true };
        }
        return null;
    }



}