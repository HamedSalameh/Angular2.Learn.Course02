import { OpaqueToken  } from '@angular/core';
// create a token used for the DI in order to find the instance of the object we want

export let TOASTR_TOKEN = new OpaqueToken('toastr');
export interface Toastr{
    success(msg: string, title?:string) : void;
    info(msg: string, title?:string) : void;
    warning(msg: string, title?:string) : void;
    error(msg: string, title?:string) : void;
}