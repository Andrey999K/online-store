import { badges } from "./badges.api";
import axios from "axios";

export const catalog = [
  {
    id: 1,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [
      badges[0]
    ]
  },
  {
    id: 2,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [
      badges[0]
    ]
  },
  {
    id: 3,
    name: "Ноутбук игровой MSI Sword 15 A12UE-487XRU, 15.6\",  IPS, Intel Core i7 12700H, 14-ядерный, 16ГБ DDR4, 512ГБ SSD,  NVIDIA GeForce  RTX 3060 для ноутбуков - 6 ГБ, белый",
    price: 105990,
    oldPrice: 105990,
    badges: [
      badges[1]
    ]
  },
  {
    id: 4,
    name: "Ноутбук Huawei MateBook D 16 RLEF-X, 16\",  IPS, Intel Core i7 12700H, 14-ядерный, 16ГБ LPDDR4x, 512ГБ SSD,  Intel Iris Xe graphics , серый",
    price: 79990,
    oldPrice: 79990,
    badges: [
      badges[1]
    ]
  },
  {
    id: 5,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 6,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 7,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 8,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 9,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 10,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 11,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 12,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 13,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 14,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 15,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 16,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 17,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 18,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 19,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 20,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 21,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 22,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 23,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 24,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 25,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 26,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 27,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 28,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 29,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 30,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 31,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 32,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 33,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 34,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 35,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 36,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 37,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 38,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 39,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 40,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 41,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 42,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 43,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 44,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 45,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 46,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 47,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 48,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 49,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 50,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 51,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 52,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 53,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 54,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 55,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 56,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 57,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 58,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 59,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 60,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 61,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 62,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 63,
    name: "Ноутбук Huawei MateBook D 15 BoD-WDH9, 15.6\", IPS, Intel Core i5 1135G7 2.4ГГц, 4-ядерный, 8ГБ DDR4, 256ГБ SSD, Intel Iris Xe graphics , Windows 11 Home, серебристый",
    price: 44990,
    oldPrice: 48990,
    badges: [

    ]
  },
  {
    id: 64,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  },
  {
    id: 65,
    name: "Ноутбук игровой MSI GP66 Leopard 11UG-699XRU, 15.6\", IPS, Intel Core i7 11800H 2.3ГГц, 8-ядерный, 16ГБ DDR4, 512ГБ SSD, NVIDIA GeForce RTX 3070 для ноутбуков - 8 ГБ, Free DOS, черный",
    price: 119990,
    oldPrice: 119990,
    badges: [

    ]
  }
];

// const fetchAll = () => {
//   return new Promise(resolve => {
//     resolve(catalog);
//   });
// };

const fetchAll = async() => {
  try {
    const response = await axios.get("data/data.json");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  fetchAll
};
