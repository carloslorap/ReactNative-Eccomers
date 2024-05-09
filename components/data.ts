export type Category = {
  title: string;
  content: string[];
  type: string;
  price: number;
  contentNested: NestedItem[];
};

export type NestedItem = {
  titleV: string;
  venta: string;
  envio: string;
  fecha: string;
  transaccion: string;
  estado: string;
  //direccion
  nombreD: string;
  zip: number;
  direccion: string;
  provincia: string;
  region: string;
  ciudad: string;
  pais: string;

  //productos
  product: Product[];
};

export type Product = {
  image: string;
  titleProduct: string;
  categoryP: string;
  priceP: number;
  cantidadP: number;
};

export type Data = Category[];

const data: Data = [
  {
    title: "2353NMNJ213412K2K314NK234",
    content: ["Content Category 1"],
    type: "Mar 12, 2014",
    price: 300,
    contentNested: [
      {
        titleV: "2353NMNJ213412K2K314NK234",
        venta: "001-000014",
        envio: "Envio gratis",
        fecha: "Marz 12, 2014",
        transaccion: "348SDGFSD424DFDS2",
        estado: "Procesando",

        //direccion
        nombreD: "Carlos",
        zip: 1003,
        direccion: "El Amenacho 1 calle santa rosa",
        provincia: "Lima",
        region: "Lima",
        ciudad: "El Agustino",
        pais: "Peru",

        //producto
        product: [
          {
            image: require("./database/images/products/Mi1.png"),
            titleProduct: "MI Super Bass Bluetooth Wireless Headphones",
            categoryP: "product",
            priceP: 1799,
            cantidadP: 2,
          },
          {
            image: require("./database/images/products/boat1.png"),
            titleProduct: "boAt Rockerz 450 Bluetooth Headphone",
            categoryP: "product",
            priceP: 199,
            cantidadP: 1,
          },
        ],
      },
    ],
  },
  {
    title: "JH1234HNJN24124H124B123JI4B",
    content: ["Content Category 1", "Content Category 2"],

    type: "Mar 12, 2014",
    price: 1200,
    contentNested: [
      {
        titleV: "21234NMNJ213412KASFASD14NK234",
        venta: "001-000015",
        envio: "Envio gratis",
        fecha: "Marz 12, 2014",
        transaccion: "348SDGFSD424DFDS2",
        estado: "Procesando",

        //direccion
        nombreD: "Carlos",
        zip: 1003,
        direccion: "El Amenacho 2 calle aguila real Mz B lote 3",
        provincia: "Lima",
        region: "Lima",
        ciudad: "El Agustino",
        pais: "Peru",

        //producto
        product: [
          {
            image: require("./database/images/products/boult1.png"),
            titleProduct: "MI Super Bass Bluetooth Wireless Headphones",
            categoryP: "product",
            priceP: 1799,
            cantidadP: 2,
          },
        ],
      },
    ],
  },
  {
    title: "12KN12JK4N123J4N1IJ2N41J2IB12",
    content: ["Content Category 1", "Content Category 2", "Content Category 3"],

    type: "Feb 12, 2024",
    price: 700,
    contentNested: [
      {
        titleV: "2353DSFGDFG13412K2K314NK234",
        venta: "001-000016",
        envio: "Envio gratis",
        fecha: "Marz 12, 2014",
        transaccion: "348SDGFSD424DFDS2",
        estado: "Procesando",

        //direccion
        nombreD: "Carlos",
        zip: 1003,
        direccion: "El Amenacho 1 calle santa rosa",
        provincia: "Lima",
        region: "Lima",
        ciudad: "El Agustino",
        pais: "Peru",

        //producto
        product: [
          {
            image: require("./database/images/accessories/boatairpods1.png"),
            titleProduct: "MI Super Bass Bluetooth Wireless Headphones",
            categoryP: "product",
            priceP: 1799,
            cantidadP: 2,
          },
          {
            image: require("./database/images/accessories/boatbassheads1.png"),
            titleProduct: "MI Super Bass Bluetooth Wireless Headphones",
            categoryP: "product",
            priceP: 1799,
            cantidadP: 2,
          },
        ],
      },
    ],
  },
  {
    title: "12KJ3N1J4HJ14B1HJ4B12JI412J4N",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],

    type: "Ene 12, 2018",
    price: 800,
    contentNested: [
      {
        titleV: "DFG23RDSF23RWDFWDF23",
        venta: "001-000017",
        envio: "Envio gratis",
        fecha: "Marz 12, 2014",
        transaccion: "12FGDS2124WWDF111",
        estado: "Procesando",

        //direccion
        nombreD: "Carlos",
        zip: 1003,
        direccion: "El Amenacho 1 calle santa rosa",
        provincia: "Lima",
        region: "Lima",
        ciudad: "El Agustino",
        pais: "Peru",

        //producto
        product: [
          {
            image: require("./database/images/accessories/boatrockerz1.png"),
            titleProduct: "MI Super Bass Bluetooth Wireless Headphones",
            categoryP: "product",
            priceP: 1799,
            cantidadP: 2,
          },
        ],
      },
    ],
  },
  {
    title: "1O2IK4N1KJ4NJ14N1J412JK4N12J",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    type: "Abr 12, 2022",
    price: 2000,
    contentNested: [
      {
        titleV: "ASDASD12231DASD12SD",
        venta: "001-000014",
        envio: "Envio gratis",
        fecha: "Marz 12, 2014",
        transaccion: "23RDF23FDFC23D12",
        estado: "Procesando",

        //direccion
        nombreD: "Carlos",
        zip: 1003,
        direccion: "El Amenacho 1 calle santa rosa",
        provincia: "Lima",
        region: "Lima",
        ciudad: "El Agustino",
        pais: "Peru",

        //producto
        product: [
          {
            image: require("./database/images/accessories/boultairbass1.png"),
            titleProduct: "MI Super Bass Bluetooth Wireless Headphones",
            categoryP: "product",
            priceP: 1799,
            cantidadP: 2,
          },
        ],
      },
    ],
  },
];

export default data;
