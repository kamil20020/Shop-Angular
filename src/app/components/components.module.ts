import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IconComponent,
    IconButtonComponent
  ],
  exports: [
    IconComponent,
    IconButtonComponent
  ]
})
export class ComponentsModule { }
