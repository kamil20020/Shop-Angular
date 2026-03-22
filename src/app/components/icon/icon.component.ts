import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  standalone: false
})
export class IconComponent {
  @Input() iconName!: string;
  @Input() size?: number;
}
