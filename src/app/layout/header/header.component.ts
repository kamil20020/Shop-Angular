import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false
})
export class HeaderComponent {

  protected handleSettings(){
    console.log('AA');
  }
}
