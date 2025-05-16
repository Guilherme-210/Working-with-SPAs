import IntelCoreI9 from "./assets/products/ProcessadorIntelCore-i9-11900K.webp"
import AmdRyzen9 from "./assets/products/ProcessadorAMDRyzen9-5950X.jpg"
import MemoriaCorsair from "./assets/products/Memória Corsair Vengeance LPX 32GB (2 x 16GB) DDR4-3200.webp"
import MemoriaCrucial from "./assets/products/Memoria Crucial Ballistix 16GB (2 X 8GB) DDR4-3600.jpg"
import PlacaMãeASUS from "./assets/products/Placa-mãe ASUS ROG Strix B550-F Gaming.jpeg"
import PlacaDeVídeoNVIDIA from "./assets/products/Placa de vídeo NVIDIA GeForce RTX 3060 Ti.webp"
import FonteCorsair from "./assets/products/Fonte Corsair RM750x 750W 80 Plus Gold.jpeg"
import SsdSamsung980 from "./assets/products/SSD Samsung 980 PRO 1TB NVMe.jpeg"
import GabineteNZXT from "./assets/products/Gabinete NZXT H510.jpeg"
import CoolerMaster from "./assets/products/Cooler Master Hyper 212 Black Edition.jpg"

const ProductsDatabase = [
  {
    id: 1,
    name: "Processador Intel Core i9-11900K",
    description:
      "O Intel Core i9-11900K é um processador de alto desempenho com 8 núcleos e 16 threads. Ele possui uma frequência base de 3.5GHz e pode alcançar até 5.3GHz com a tecnologia Intel Turbo Boost Max 3.0.",
    price: 499.99,
    image: IntelCoreI9,
  },
  {
    id: 2,
    name: "Processador AMD Ryzen 9 5950X",
    description:
      "O AMD Ryzen 9 5950X é um processador topo de linha com 16 núcleos e 32 threads, ideal para tarefas exigentes. Sua frequência base é de 3.4GHz e pode chegar a até 4.9GHz.",
    price: 749.99,
    image: AmdRyzen9,
  },
  {
    id: 3,
    name: "Memória Corsair Vengeance LPX 32GB (2 x 16GB) DDR4-3200",
    description:
      "A Corsair Vengeance LPX é um kit de memória de alto desempenho ideal para jogos e criação de conteúdo. Inclui dois módulos de 16GB DDR4 operando a 3200MHz.",
    price: 159.99,
    image: MemoriaCorsair,
  },
  {
    id: 4,
    name: "Memória Crucial Ballistix 16GB (2 X 8GB) DDR4-3600",
    description:
      "A Crucial Ballistix é uma memória premium para aplicações exigentes, como games e edição de vídeo. São quatro módulos de 16GB DDR4 rodando a 3600MHz.",
    price: 189.99,
    image: MemoriaCrucial,
  },
  {
    id: 5,
    name: "Placa-mãe ASUS ROG Strix B550-F Gaming",
    description:
      "A ROG Strix B550-F é uma placa-mãe confiável com suporte a processadores AMD Ryzen, PCIe 4.0, Wi-Fi 6 e áudio de alta definição.",
    price: 199.9,
    image: PlacaMãeASUS,
  },
  {
    id: 6,
    name: "Placa de vídeo NVIDIA GeForce RTX 3060 Ti",
    description:
      "A RTX 3060 Ti oferece excelente desempenho gráfico para jogos em 1080p e 1440p, com suporte a Ray Tracing e DLSS da NVIDIA.",
    price: 399.99,
    image: PlacaDeVídeoNVIDIA,
  },
  {
    id: 7,
    name: "Fonte Corsair RM750x 750W 80 Plus Gold",
    description:
      "A RM750x é uma fonte modular com certificação 80 Plus Gold, garantindo alta eficiência energética e operação silenciosa.",
    price: 139.99,
    image: FonteCorsair,
  },
  {
    id: 8,
    name: "SSD Samsung 980 PRO 1TB NVMe",
    description:
      "O Samsung 980 PRO é um SSD de alto desempenho com tecnologia NVMe PCIe 4.0, oferecendo velocidades de leitura e gravação ultrarrápidas.",
    price: 189.99,
    image: SsdSamsung980,
  },
  {
    id: 9,
    name: "Gabinete NZXT H510",
    description:
      "O NZXT H510 é um gabinete moderno e minimalista com ótimo fluxo de ar, lateral em vidro temperado e espaço para organização de cabos.",
    price: 99.99,
    image: GabineteNZXT,
  },
  {
    id: 10,
    name: "Cooler Master Hyper 212 Black Edition",
    description:
      "O Hyper 212 é um cooler a ar eficiente para processadores, com design preto fosco, baixo ruído e excelente dissipação térmica.",
    price: 49.9,
    image: CoolerMaster,
  },
]

export default ProductsDatabase
