export class PatientMasks {
    static MASK_CPF: any[] =
        [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,  '-', /\d/, /\d/];

    static MASK_PHONE: any[] =
        ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    static MASK_CEP: any[] = 
        [ /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/ ];
}
