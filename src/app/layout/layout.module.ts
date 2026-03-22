import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ɵEmptyOutletComponent, RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ɵEmptyOutletComponent,
    RouterLink
],
  exports: [
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
