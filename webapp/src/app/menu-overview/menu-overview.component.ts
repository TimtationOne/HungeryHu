import { Component, inject } from '@angular/core'
import { MenuService } from '../menu.service'
import { type Menu } from '../menu'

@Component({
  selector: 'app-menue-overview',
  templateUrl: './menu-overview.component.html',
  styleUrls: ['./menu-overview.component.scss']
})
export class MenuOverviewComponent {
  menuService: MenuService = inject(MenuService)
  menuList: Array<Menu> = []

  constructor () {
    this.menuList = this.menuService.getMenus()
  }
}
