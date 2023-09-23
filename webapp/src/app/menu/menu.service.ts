import {Injectable} from '@angular/core'
import {Menu} from "./menu";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  private httpClient: HttpClient

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getMenus(): Observable<Array<Menu>> {
    return this.httpClient.get<Array<Menu>>('/api/menus')
  }
}
