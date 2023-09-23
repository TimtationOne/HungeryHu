export type TMenu = {
    name: string;
    description: string;
    ingredients: Array<string>
}

export const menues: Array<TMenu> = [
    {
        name: "Fischstäbchen mit Kartoffelsalat",
        description: "Fischstäbchen mit Kartoffelsalat",
        ingredients: ["Fischstäbchen", "Kartoffelsalat"]
    },
    {
        name: "Spätzle Zucchini Pilz Pfanne",
        description: "",
        ingredients: ["Spätzle", "Zucchini", "Champinions", "Schmand"]
    },
    {
        name: "Süßkartoffel Bowl",
        description: "",
        ingredients: ["Reis", "Süßkartoffeln", "Aubergine", "Tomate", "Salat"]
    }
]