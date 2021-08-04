import {NgModule} from '@angular/core';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';

@NgModule({
  exports: [
    DropdownModule,
    ButtonModule
  ]
})
export class PrimeNgModule {}
