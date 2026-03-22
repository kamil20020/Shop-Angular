import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

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
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
