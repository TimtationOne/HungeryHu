import {Component, inject} from '@angular/core'
import {MenuService} from '../menu/menu.service'
import {type Menu} from '../menu/menu'

@Component({
  selector: 'app-menue-overview',
  templateUrl: './menu-overview.component.html',
  styleUrls: ['./menu-overview.component.scss']
})
export class MenuOverviewComponent {
  menuService: MenuService = inject(MenuService)
  menuList: Array<Menu> = []

  constructor() {
    this.menuService.getMenus().subscribe((data) => {
      this.menuList = data
      this.menuList.sort(() => Math.random() - 0.5)
    })
  }
}
