import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from "./layout/layout.module";
import { PagesModule } from './pages/pages.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutModule, PagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop';
}
