import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css',
  standalone: false
})
export class IconButtonComponent {
  @Input() iconName!: string;
  @Input() size?: number;
  @Input() onClick!: () => void;
}
