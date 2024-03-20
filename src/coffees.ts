import Expresso from './assets/coffeeImages/Expresso.svg'
import Americano from './assets/coffeeImages/Americano.svg'
import CafeComLeite from './assets/coffeeImages/CafeComLeite.svg'
import Latte from './assets/coffeeImages/Latte.svg'
import Mocaccino from './assets/coffeeImages/Mocaccino.svg'
import ChocolateQuente from './assets/coffeeImages/ChocolateQuente.svg'
import Arabe from './assets/coffeeImages/Arabe.svg'
import Irlandes from './assets/coffeeImages/Irlandes.svg'
import ExpressoCremoso from './assets/coffeeImages/ExpressoCremoso.svg'
import CafeGelado from './assets/coffeeImages/CafeGelado.svg'
import Capuccino from './assets/coffeeImages/Capuccino.svg'
import Macchiato from './assets/coffeeImages/Macchiato.svg'
import Cubano from './assets/coffeeImages/Cubano.svg'
import Havaiano from './assets/coffeeImages/Havaiano.svg'

interface TagsType {
  id: string,
  characteristic: string,
}

export interface CoffeeType {
  id: string;
  name: string;
  image: string;
  tags: TagsType[];
  description: string;
  price: number;
  quantity: number;
}


export const coffees: CoffeeType[] = [
  {
    id: crypto.randomUUID(),
    name: "Expresso Tradicional",
    image: Expresso,
    tags: [{ id: crypto.randomUUID(), characteristic: "Tradicional" }],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 10,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Expresso Americano",
    image: Americano,
    tags: [{ id: crypto.randomUUID(), characteristic: "Tradicional"}],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 6,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Café com Leite",
    image: CafeComLeite,
    tags: [
      { id: crypto.randomUUID(), characteristic: "Tradicional" }, 
      { id: crypto.randomUUID(), characteristic: "Com leite"}
    ],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 10,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Latte",
    image: Latte,
    tags: [
      { id: crypto.randomUUID(), characteristic: "Tradicional" }, 
      { id: crypto.randomUUID(), characteristic: "Com Leite"}
    ],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 2,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Mocaccino",
    image: Mocaccino,
    tags: [
      { id: crypto.randomUUID(), characteristic: "Tradicional" }, 
      { id: crypto.randomUUID(), characteristic: "Com Leite" }
    ],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 10,
    quantity: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "Chocolate Quente",
    image: ChocolateQuente,
    tags: [
      { id: crypto.randomUUID(), characteristic: "Especial" }, 
      { id: crypto.randomUUID(), characteristic: "Com leite" }
    ],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 8,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Árabe",
    image: Arabe,
    tags: [{ id: crypto.randomUUID(), characteristic: "Especial" }],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 4,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Irlândes",
    image: Irlandes,
    tags: [
      { id: crypto.randomUUID(), characteristic: "Especial" }, 
      { id: crypto.randomUUID(), characteristic: "Alcoólico" }
    ],
    description: "Bebida a base de café, uísque irlândes, açúcar e chantilly",
    price: 10,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Expresso Cremoso",
    image: ExpressoCremoso,
    tags: [{ id: crypto.randomUUID(), characteristic: "Tradicional" }],
    description: "Café expresso tradicional com espuma cremosa",
    price: 6,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Expresso Gelado",
    image: CafeGelado,
    tags: [
      { id: crypto.randomUUID(), characteristic: "Tradicional" }, 
      { id: crypto.randomUUID(), characteristic: "Gelado" }
    ],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 10,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Capuccino",
    image: Capuccino,
    tags: [
      { id: crypto.randomUUID(), characteristic:"Tradicional" }, 
      { id: crypto.randomUUID(), characteristic: "Com leite" }
    ],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 4,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Macchiato",
    image: Macchiato,
    tags: [
      { id: crypto.randomUUID(), characteristic:"Tradicional" }, 
      { id: crypto.randomUUID(), characteristic: "Com leite" }
    ],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Cubano",
    image: Cubano,
    tags: [
      { id: crypto.randomUUID(), characteristic: "Especial" }, 
      { id: crypto.randomUUID(), characteristic: "Alcoólico" }, 
      { id: crypto.randomUUID(), characteristic: "Gelado"}
    ],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 5,
    quantity: 0,
  },
  {
    id:crypto.randomUUID(),
    name: "Havaiano",
    image: Havaiano,
    tags: [{ id: crypto.randomUUID(), characteristic: "Especial" }],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 7,
    quantity: 0,
  }
]

