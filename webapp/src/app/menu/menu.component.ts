import {Component, Input} from '@angular/core';
import {Menu} from "./menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menu!: Menu
}
