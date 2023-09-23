import {Injectable} from '@angular/core'
import {Menu} from "./menu";

const menues: Array<Menu> = [
  {
    name: 'Fischstäbchen mit Kartoffelsalat',
    description: 'Fischstäbchen mit Kartoffelsalat',
    ingredients: ['Fischstäbchen', 'Kartoffelsalat']
  },
  {
    name: 'Spätzle Zucchini Pilz Pfanne',
    description: '',
    ingredients: ['Spätzle', 'Zucchini', 'Champinions', 'Schmand']
  },
  {
    name: 'Süßkartoffel Bowl',
    description: '',
    ingredients: ['Reis', 'Süßkartoffeln', 'Aubergine', 'Tomate', 'Salat']
  }
]

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenus(): Array<Menu> {
    return menues
  }
}
