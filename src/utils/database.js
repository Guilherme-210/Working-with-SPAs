import Wonders from "../assets/products/Wonders.jpg"
import SenhorDosAnéis from "../assets/products/SenhorDosAnéis.jpeg"
import Catan from "../assets/products/Catan.jpeg"
import Dixit from "../assets/products/Dixit.jpeg"
import Uno from "../assets/products/Uno.jpeg"
import TicketToRide from "../assets/products/TicketToRide.jpeg"
import Carcassonne from "../assets/products/Carcassonne.jpeg"
import ExplodingKittens from "../assets/products/ExplodingKittens.jpeg"
import TerraformingMars from "../assets/products/TerraformingMars.jpeg"
import Dominion from "../assets/products/Dominion.jpeg"

const lastUpdated = "19/05/2025"

const products = [
  {
    id: 1,
    name: "7 Wonders",
    category: "Tabuleiro",
    price: 199.9,
    quantity: 11,
    description:
      "Um jogo de estratégia onde você lidera uma civilização antiga rumo à glória.",
    image: Wonders,
    createdAt: lastUpdated,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis: Card Game",
    category: "Cartas",
    price: 149.99,
    quantity: 40,
    description:
      "Jogo cooperativo de cartas baseado no universo de Tolkien. Prepare-se para a aventura!",
    image: SenhorDosAnéis,
    createdAt: lastUpdated,
  },
  {
    id: 3,
    name: "Catan",
    category: "Tabuleiro",
    price: 229.0,
    quantity: 3,
    description:
      "Conquiste territórios, negocie recursos e domine a ilha de Catan.",
    image: Catan,
    createdAt: lastUpdated,
  },
  {
    id: 4,
    name: "Dixit",
    category: "Família",
    price: 169.5,
    quantity: 8,
    description:
      "Use sua imaginação para interpretar imagens oníricas e vencer com criatividade.",
    image: Dixit,
    createdAt: lastUpdated,
  },
  {
    id: 5,
    name: "Uno",
    category: "Cartas",
    price: 29.9,
    quantity: 20,
    description: "O clássico jogo de cartas que destrói amizades em segundos.",
    image: Uno,
    createdAt: lastUpdated,
  },
  {
    id: 6,
    name: "Ticket to Ride",
    category: "Tabuleiro",
    price: 219.99,
    quantity: 12,
    description:
      "Construa rotas ferroviárias e domine o mapa com suas estratégias logísticas.",
    image: TicketToRide,
    createdAt: lastUpdated,
  },
  {
    id: 7,
    name: "Carcassonne",
    category: "Tabuleiro",
    price: 129.9,
    quantity: 9,
    description:
      "Coloque peças, conquiste territórios e controle a cidade medieval de Carcassonne.",
    image: Carcassonne,
    createdAt: lastUpdated,
  },
  {
    id: 8,
    name: "Exploding Kittens",
    category: "Cartas",
    price: 89.99,
    quantity: 15,
    description:
      "Jogo de cartas caótico com gatinhos explosivos e muita zoeira.",
    image: ExplodingKittens,
    createdAt: lastUpdated,
  },
  {
    id: 9,
    name: "Terraforming Mars",
    category: "Estratégia",
    price: 289.0,
    quantity: 5,
    description:
      "Gerencie corporações e transforme Marte num novo lar para a humanidade.",
    image: TerraformingMars,
    createdAt: lastUpdated,
  },
  {
    id: 10,
    name: "Dominion",
    category: "Deck Building",
    price: 179.9,
    quantity: 6,
    description:
      "Crie o baralho perfeito em um jogo de construção de deck inovador e estratégico.",
    image: Dominion,
    createdAt: lastUpdated,
  },
]

export default products
