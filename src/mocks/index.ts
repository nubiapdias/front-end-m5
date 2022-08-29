import * as T from "../types";

export const mockedProducts: T.Product[] = [
  {
    id: "c209ea60-f78d-4a5b-b4f7-d5101798f1e8",
    name: "Expresso",
    description: "Perfeito para adultos u-u.",
    price: 8.99,
    image:
      "https://images.vexels.com/media/users/3/128080/isolated/preview/ba993e973cf5536cc3a2867c860f4f51-xicara-de-cha-quente.png",
    categoryId: "2e42eaf3-f1c5-4db0-2450-34fbd590df2c",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "25709451-cfa1-5db6-f7a3-da7f5789f6af",
    name: "Chocolate Quente",
    description: "Para os românticos e os dias frios.",
    price: 10.99,
    image:
      "https://images.vexels.com/media/users/3/128080/isolated/preview/ba993e973cf5536cc3a2867c860f4f51-xicara-de-cha-quente.png",
    categoryId: "2e42eaf3-f1c5-4db0-2450-34fbd590df2c",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f3da4626-67f2-7765-ac5f-20ab3f81f4cf",
    name: "Chá Inglês",
    description: "Para os estranhos...",
    price: 7.99,
    image:
      "https://images.vexels.com/media/users/3/128080/isolated/preview/ba993e973cf5536cc3a2867c860f4f51-xicara-de-cha-quente.png",
    categoryId: "2e42eaf3-f1c5-4db0-2450-34fbd590df2c",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "368912cd-d47a-2793-49e3-4365b0be7873",
    name: "O Canto Mais Escuro da Floresta",
    description:
      "Hazel e seu irmão, Ben, moram em uma cidade onde humanos e fadas convivem.",
    price: 12.99,
    image:
      "https://images.vexels.com/media/users/3/205464/isolated/preview/33d6bbfd7171189bd02d36b4e2befb6b-pilha-de-livros-com-ilustracao-de-cha.png",
    categoryId: "b7f84fc4-ba2f-10b7-5c46-520a735038e1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "f2377fe2-eebf-99c2-1a16-412b568d42c5",
    name: "Harry Potter",
    description:
      "Um garoto que vive em um armário embaixo da escada recebe uma carta misteriosa",
    price: 30.45,
    image:
      "https://images.vexels.com/media/users/3/205464/isolated/preview/33d6bbfd7171189bd02d36b4e2befb6b-pilha-de-livros-com-ilustracao-de-cha.png",
    categoryId: "b7f84fc4-ba2f-10b7-5c46-520a735038e1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "24968a3b-221b-3f4c-e47d-befb9512abe5",
    name: "Percy Jackson",
    description:
      "Um jovem que enfrenta problemas na escola, devido ao que acredita ser dislexia e déficit de atenção.",
    price: 17.99,
    image:
      "https://images.vexels.com/media/users/3/205464/isolated/preview/33d6bbfd7171189bd02d36b4e2befb6b-pilha-de-livros-com-ilustracao-de-cha.png",
    categoryId: "b7f84fc4-ba2f-10b7-5c46-520a735038e1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedCategories: T.Category[] = [
  {
    id: "b7f84fc4-ba2f-10b7-5c46-520a735038e1",
    name: "Livros",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2e42eaf3-f1c5-4db0-2450-34fbd590df2c",
    name: "Bebidas",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedTables: T.Table[] = [
  {
    id: "473535fb-86ad-37bb-b8d7-7527d729aa51",
    number: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5df33165-9ea2-7293-8317-0fc4c42ccf37",
    number: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "273bdf1e-5741-5470-a3f0-f4e45f1630b0",
    number: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedUsers: T.User[] = [
  {
    id: "676db4b1-dcf2-5a91-e21b-b62e51103f00",
    name: "Baiacu",
    email: "Baiacu@peixe.com",
    password: "Admin3498763@",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedFavorites: T.Favorite[] = [
  {
    id: "24feb8f0-c559-5dbe-cdfd-c465f250d3d7",
    productName: "Café Preto",
    userId: "676db4b1-dcf2-5a91-e21b-b62e51103f00",
    favoritedAt: new Date(),
  },
  {
    id: "0b4e3e0f-44da-2d00-5fae-33c73edbbc61",
    productName: "Chá de Morango",
    userId: "676db4b1-dcf2-5a91-e21b-b62e51103f00",
    favoritedAt: new Date(),
  },
];

export const mockedOrders: T.Order[] = [
  {
    id: "c36775f0-6766-210d-fdcd-6305b6e3364f",
    tableNumber: 1,
    userId: "676db4b1-dcf2-5a91-e21b-b62e51103f00",
    createdAt: new Date(),
  },
];

export const mockedOrdersToProducts: T.OrderToProduct[] = [
  {
    id: "41889bd0-a2a1-454d-823d-eb5d73d73e59",
    productId: "00e3e2b2-59cd-274b-e50e-0b86bf1a80d8",
    orderId: "c36775f0-6766-210d-fdcd-6305b6e3364f",
    quantity: 1,
    createdAt: new Date(),
  },
  {
    id: "53eeb0a6-ed71-458c-b1e3-1a22ba4d2b76",
    productId: "f24968a3b-221b-3f4c-e47d-befb9512abe5",
    orderId: "c36775f0-6766-210d-fdcd-6305b6e3364f",
    quantity: 1,
    createdAt: new Date(),
  },
];
