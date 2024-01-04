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

interface CoffeeType {
  id: number;
  name: string;
  image: string;
  characteristics: string[];
  description: string;
  price: {
    currency: number;
    cents: number;
  };
  quantity: number;
}


export const coffees: CoffeeType[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    image: Expresso,
    characteristics: ["Tradicional"],
    description: "O tradicional cofé feito com água quente e grãos moídos",
    price: {
      currency: 5,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 2,
    name: "Expresso Americano",
    image: Americano,
    characteristics: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: {
      currency: 7,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 3,
    name: "Café com Leite",
    image: CafeComLeite,
    characteristics: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: {
      currency: 9,
      cents: 9,
    },
    quantity: 0,
  },
  {
    id: 4,
    name: "Latte",
    image: Latte,
    characteristics: ["Tradicional", "Com Leite"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: {
      currency: 11,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 5,
    name: "Mocaccino",
    image: Mocaccino,
    characteristics: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: {
      currency: 14,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 6,
    name: "Chocolate Quente",
    image: ChocolateQuente,
    characteristics: ["Especial", "Com leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: {
      currency: 14,
      cents: 5,
    },
    quantity: 0,
  },
  {
    id: 7,
    name: "Árabe",
    image: Arabe,
    characteristics: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: {
      currency: 15,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 8,
    name: "Irlândes",
    image: Irlandes,
    characteristics: ["Especial", "Alcoólico"],
    description: "Bebida a base de café, uísque irlândes, açúcar e chantilly",
    price: {
      currency: 16,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 9,
    name: "Expresso Cremoso",
    image: ExpressoCremoso,
    characteristics: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: {
      currency: 10,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 10,
    name: "Expresso Gelado",
    image: CafeGelado,
    characteristics: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: {
      currency: 9,
      cents: 9,
    },
    quantity: 0,
  },
  {
    id: 11,
    name: "Capuccino",
    image: Capuccino,
    characteristics: ["Tradicional", "Com leite"],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: {
      currency: 17,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 12,
    name: "Macchiato",
    image: Macchiato,
    characteristics: ["Tradicional", "Com leite"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: {
      currency: 16,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 13,
    name: "Cubano",
    image: Cubano,
    characteristics: ["Especial", "Alcoólico", "Gelado"],
    description: "Drink gelado de café expresso com rum, creme mde leite e hortelã",
    price: {
      currency: 15,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 14,
    name: "Havaiano",
    image: Havaiano,
    characteristics: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: {
      currency: 12,
      cents: 0,
    },
    quantity: 0,
  },
  {
    id: 15,
    name: "Expresso Tradicional",
    image: Expresso,
    characteristics: ["Tradicional"],
    description: "O tradicional cofé feito com água quente e grãos moídos",
    price: {
      currency: 5,
      cents: 0,
    },
    quantity: 0,
  }
]

