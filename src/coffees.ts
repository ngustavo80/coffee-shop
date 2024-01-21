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

interface CoffeeType {
  id: number;
  name: string;
  image: string;
  tags: TagsType[];
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
    tags: [{ id: "478237348217389217389", characteristic: "Tradicional" }],
    description: "O tradicional café feito com água quente e grãos moídos",
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
    tags: [{ id: "47823748923173481273892", characteristic: "Tradicional"}],
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
    tags: [
      { id: "381298391283912", characteristic: "Tradicional" }, 
      { id: "317232172819281", characteristic: "Com leite"}
    ],
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
    tags: [
      { id: "372371037837213812", characteristic: "Tradicional" }, 
      { id: "348729319078183291", characteristic: "Com Leite"}
    ],
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
    tags: [
      { id: "478219032819057213", characteristic: "Tradicional" }, 
      { id: "437218030712381233", characteristic: "Com Leite" }
    ],
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
    tags: [
      { id: "4839024782103821", characteristic: "Especial" }, 
      { id: "4u72819742138213", characteristic: "Com leite" }
    ],
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
    tags: [{ id: "4u2813n23yh13821930", characteristic: "Especial" }],
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
    tags: [
      { id: "47218342781378291", characteristic: "Especial" }, 
      { id: "47281632183128474", characteristic: "Alcoólico" }
    ],
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
    tags: [{ id: "40484782103782167421", characteristic: "Tradicional" }],
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
    tags: [
      { id: "43721836281372901467", characteristic: "Tradicional" }, 
      { id: "45720164217321632178", characteristic: "Gelado" }
    ],
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
    tags: [
      { id: "47231856213724589163", characteristic:"Tradicional" }, 
      { id: "47210380145411548912", characteristic: "Com leite" }
    ],
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
    tags: [
      { id: "512594851256489159", characteristic:"Tradicional" }, 
      { id: "156482564895947845", characteristic: "Com leite" }
    ],
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
    tags: [
      { id: "15678915645626415489", characteristic: "Especial" }, 
      { id: "21489156489156126485", characteristic: "Alcoólico" }, 
      { id: "15612546315648951655", characteristic: "Gelado"}
    ],
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
    tags: [{ id: "4u290329103728173011", characteristic: "Especial" }],
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
    tags: [{ id: "34821674829173482167458921", characteristic: "Tradicional" }],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: {
      currency: 5,
      cents: 0,
    },
    quantity: 0,
  }
]

