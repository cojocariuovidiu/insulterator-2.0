import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  public message = 'An unknown error has occured.';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) { } // DAMN.

}
