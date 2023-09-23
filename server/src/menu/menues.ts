export interface TMenu {
  name: string
  description: string
  ingredients: string[]
}

export const menues: TMenu[] = [
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
