import { OpaqueToken  } from '@angular/core';
// create a token used for the DI in order to find the instance of the object we want

export let JQ_TOKEN = new OpaqueToken('jQuery');