import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products:Product[] = [
    {
      "id": 1,
      "title": "Licensed Rubber Hat",
      "price": 63,
      "description": "Corrupti qui molestiae architecto aut est dolorum dolorem. Atque magni assumenda in. Et aut perspiciatis alias qui et fugiat asperiores dolorem.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/94/3c/66/943c665346aa9187178a8b5d778c71ac.jpg",
      "rating": { "rate": 3.8, "count": 292 }
    },
    {
      "id": 2,
      "title": "Rustic Wooden Sausages",
      "price": 76,
      "description": "Ea quisquam omnis deserunt rem veritatis sint. Impedit voluptas nemo consequatur autem quidem voluptatem repellendus accusantium. Quia magni adipisci omnis eos non. Necessitatibus quo asperiores officia dolore nemo.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/c1/b5/97/c1b59737a51a9bfc3d30bceea92100af.jpg",
      "rating": { "rate": 4.6, "count": 434 }
    },
    {
      "id": 3,
      "title": "Handcrafted Rubber Pizza",
      "price": 55,
      "description": "Omnis voluptatem alias odit voluptatem voluptate. Quibusdam ut aut. Ducimus suscipit vero. Sint aut ut nulla aut vel nihil est amet.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/04/42/f5/0442f5bb3e7f0f1f088dc3ff87a3fc7e.jpg",
      "rating": { "rate": 2.4, "count": 99 },
      "featured": true
    },
    {
      "id": 4,
      "title": "Handcrafted Rubber Tuna",
      "price": 50,
      "description": "Necessitatibus aut dolores incidunt sint alias. Fugiat nulla qui nemo quam enim repellendus aut sunt. Aliquam omnis suscipit atque facere consequatur.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/e5/86/34/e58634559b4e3ae868fe45f42628fc61.jpg",
      "rating": { "rate": 4.3, "count": 389 }
    },
    {
      "id": 5,
      "title": "Sleek Rubber Tuna",
      "price": 33,
      "description": "Pariatur sint laborum occaecati laborum. Voluptatem vel aliquam. Voluptas blanditiis vero rerum sed ad impedit rerum. Quia aspernatur doloribus eum quae sit.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/e5/e5/2a/e5e52aa49c07bfc5807cb4dabea2b821.jpg",
      "rating": { "rate": 3.7, "count": 145 }
    },
    {
      "id": 6,
      "title": "Licensed Rubber Table",
      "price": 20,
      "description": "Quia ut illo enim magnam autem quas rem. Aspernatur alias est amet ea voluptatem dolorem quam ex. Ut magni eius doloribus sint quia sunt.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/7b/88/c5/7b88c50e2f7e616d58682921e5ffaa3f.jpg",
      "rating": { "rate": 4.9, "count": 211 },
      "featured": true
    },
    {
      "id": 7,
      "title": "Handcrafted Soft Chicken",
      "price": 22,
      "description": "Quod corrupti tempora. Ea rerum dignissimos tempore. Corporis ipsa et velit illo. Aut autem accusamus quia ullam.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/33/91/4b/33914b344002a9c8eee79d3b756641fa.jpg",
      "rating": { "rate": 4.2, "count": 447 }
    },
    {
      "id": 8,
      "title": "Incredible Concrete Bacon",
      "price": 37,
      "description": "Voluptas quia sapiente maiores at ut enim magnam. Dolores illo doloremque temporibus et quod reprehenderit quo incidunt. Et laborum et perspiciatis qui officia.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/f6/b7/f2/f6b7f27bca1ec5037993b4f775ab8e2f.jpg",
      "rating": { "rate": 4.7, "count": 321 }
    },
    {
      "id": 9,
      "title": "Refined Metal Sausages",
      "price": 15,
      "description": "Tempora sit perspiciatis sint non molestias. Vel et autem rerum id cumque nihil. Quo temporibus enim fugit velit eum veritatis quia.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/b9/e3/d3/b9e3d3c4afc2f5edd0b8988584502686.jpg",
      "rating": { "rate": 4.5, "count": 96 }
    },
    {
      "id": 10,
      "title": "Practical Concrete Fish",
      "price": 55,
      "description": "Atque cumque illo. Aut facilis temporibus earum sunt modi. Quia quaerat asperiores placeat veniam consequatur non. Architecto eum et voluptatem laborum et iure velit.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/67/32/49/673249e56aa380875c1421bf63a22485.jpg",
      "rating": { "rate": 3.9, "count": 425 },
      "featured": true
    },
    {
      "id": 11,
      "title": "Practical Concrete Chair",
      "price": 44,
      "description": "Voluptatem ut quisquam voluptatum id et. Ut qui ea fugit sunt odio. Mollitia nisi et eum. Necessitatibus possimus exercitationem doloribus. Qui dolorem in est dolor et sint.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/ff/04/d8/ff04d8eb02b806dcfb8ab094220751d2.jpg",
      "rating": { "rate": 3.6, "count": 148 },
      "featured": true
    },
    {
      "id": 12,
      "title": "Practical Rubber Shoes",
      "price": 87,
      "description": "Quos minima quis nostrum accusantium accusamus. Nihil accusantium sit. Molestiae ut rerum aliquid id est.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/7b/88/c5/7b88c50e2f7e616d58682921e5ffaa3f.jpg",
      "rating": { "rate": 4.2, "count": 298 }
    },
    {
      "id": 13,
      "title": "Small Concrete Bacon",
      "price": 24,
      "description": "Molestiae vel itaque consectetur dolorum. Sit eos et. Necessitatibus vel odit a enim voluptatem. Quis aspernatur a et quae minima.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/4c/97/de/4c97de37704cf5597eda7bef3f70a0fe.jpg",
      "rating": { "rate": 4.9, "count": 113 }
    },
    {
      "id": 14,
      "title": "Generic Wooden Sausages",
      "price": 31,
      "description": "In dolor quidem. Doloremque enim earum et ipsa. Deleniti qui incidunt. Aut dolores nihil molestiae.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/3c/5a/51/3c5a518016604d32ea1c08adf197c8d0.jpg",
      "rating": { "rate": 4.1, "count": 245 }
    },
    {
      "id": 15,
      "title": "Gorgeous Rubber Soap",
      "price": 42,
      "description": "Dolor autem quas. Et non eveniet dolorem. Sit deserunt ipsa rerum rerum est ullam. Ut dolores id et quia consequatur.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/24/57/ee/2457eec488aa417a87a0390e386c6acd.jpg",
      "rating": { "rate": 3.5, "count": 185 }
    },
    {
      "id": 16,
      "title": "Refined Soft Shoes",
      "price": 75,
      "description": "Corrupti facere dolorem modi voluptatem nulla explicabo. Sunt et rerum ut dolorum aut. Omnis illo enim repudiandae architecto sit vel incidunt.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/22/a7/1c/22a71cb8b9f3dff0cb2a37841432a626.jpg",
      "rating": { "rate": 4.8, "count": 389 }
    },
    {
      "id": 17,
      "title": "Gorgeous Concrete Pizza",
      "price": 68,
      "description": "Deserunt et qui illum nihil ut quia. Qui maxime et fugit eligendi molestiae. Quas molestiae dolorum et voluptate temporibus nesciunt ut aut.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/48/13/88/481388a6b652870f82c3bd058e1761f9.jpg",
      "rating": { "rate": 3.9, "count": 220 }
    },
    {
      "id": 18,
      "title": "Handcrafted Plastic Soap",
      "price": 19,
      "description": "Ut enim aut. Consequatur sapiente doloribus nostrum doloremque. Rerum velit libero rerum omnis.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/81/7d/9e/817d9e347a4e5e48f136b16b5b77db5d.jpg",
      "rating": { "rate": 4.5, "count": 126 }
    },
    {
      "id": 19,
      "title": "Licensed Metal Towels",
      "price": 40,
      "description": "Quasi quae in cumque quae alias. Dolorem facilis eos in. Ipsam odio veritatis eum. Sequi voluptas deserunt illum veniam.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/bc/b6/75/bcb67544ea51c6ab1b53c65165d74a8b.jpg",
      "rating": { "rate": 4.0, "count": 367 },
      "featured": true
    },
    {
      "id": 20,
      "title": "Handmade Fresh Towels",
      "price": 29,
      "description": "Cumque ut ut et maiores quis. Autem et sunt et possimus molestiae vel eum. Perspiciatis numquam nulla molestiae. Omnis porro repudiandae autem.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/61/56/f0/6156f0314bae3b276ead7c77f0f3bae6.jpg",
      "rating": { "rate": 4.3, "count": 432 }
    }, 
    {
      "id": 21,
      "title": "Handcrafted Wooden Shoes",
      "price": 55,
      "description": "Voluptas et aut. Illum dolorem et. Aperiam voluptatum ut ut voluptates corporis nulla.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/09/0e/db/090edb85a62fa96ca1dfca8eded419f1.jpg",
      "rating": { "rate": 3.8, "count": 292 }
    },
    {
      "id": 22,
      "title": "Licensed Fresh Bacon",
      "price": 65,
      "description": "Quo et consequatur quia sint et voluptatem. Quo et ut. Qui et vero. Dolorum nobis ab eum esse quos qui.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/03/aa/a2/03aaa2dda045efff08b6b89e851e544d.jpg",
      "rating": { "rate": 4.6, "count": 434 }
    },
    {
      "id": 23,
      "title": "Practical Wooden Shoes",
      "price": 60,
      "description": "Voluptatem sint quaerat ut eius. Soluta veniam eius quia non nesciunt odio enim et. Laborum et et fugiat aut quia sint.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/f4/13/f3/f413f35531e54151f93a9a70b17c5b8e.jpg",
      "rating": { "rate": 2.4, "count": 99 },
      "featured": true
    },
    {
      "id": 24,
      "title": "Tasty Concrete Salad",
      "price": 75,
      "description": "Voluptas animi dolorem cumque. Aut perspiciatis adipisci autem. Rerum quas tempore et autem molestiae. Assumenda doloremque qui ullam sint.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/a7/fe/49/a7fe491814d4a5cc9f1ee8fd55bc8715.jpg",
      "rating": { "rate": 4.3, "count": 389 }
    },
    {
      "id": 25,
      "title": "Handcrafted Soft Bacon",
      "price": 50,
      "description": "Voluptas dolores doloremque aliquid et. Ratione sapiente omnis dolor rerum eius. Aut ipsam et eos voluptatem voluptatem.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/d2/b3/1f/d2b31f67f102f2e22ed7b7442a4c9a62.jpg",
      "rating": { "rate": 3.7, "count": 145 }
    },
    {
      "id": 26,
      "title": "Refined Soft Cheese",
      "price": 40,
      "description": "Ut rerum nihil repellendus dignissimos explicabo illum ex. Ad et repellat rerum officia non. Ipsa aut sed exercitationem nihil aliquam.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/92/fc/58/92fc58326c3e6b4edfdb4697f1dcdaad.jpg",
      "rating": { "rate": 4.9, "count": 211 },
      "featured": true
    },
    {
      "id": 27,
      "title": "Handcrafted Concrete Gloves",
      "price": 45,
      "description": "Omnis nulla voluptas in aut eius. Consequatur qui et. Earum a vero. Earum dolorum incidunt velit et et soluta.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/62/35/3d/62353dd0549c333d634168c975d0d8eb.jpg",
      "rating": { "rate": 4.2, "count": 447 },
    },
    {
      "id": 28,
      "title": "Sleek Concrete Computer",
      "price": 55,
      "description": "Natus ut impedit exercitationem non. Ipsa sit consequatur doloribus aut et dolorem. Voluptas autem mollitia aut voluptatem error atque alias. Ratione temporibus itaque libero ut.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/71/ee/94/71ee94cd14021f1ef124a4cbf7e4adbf.jpg",
      "rating": { "rate": 3.9, "count": 425 }
    },
    {
      "id": 29,
      "title": "Gorgeous Metal Salad",
      "price": 50,
      "description": "Quia sed id. Qui molestiae accusantium eos possimus omnis eius. Omnis molestias eum ad omnis.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/ef/95/d7/ef95d70f23484770cd06536a87bd9012.jpg",
      "rating": { "rate": 3.6, "count": 148 },
      "featured": true
    },
    {
      "id": 30,
      "title": "Handmade Fresh Bacon",
      "price": 35,
      "description": "Dolores aliquid eligendi nesciunt. Sint magnam et. Fugiat enim et numquam vel voluptatem. Dolorem alias possimus iusto repellendus illo.",
      "category": "Women's Beauty",
      "image": "https://i.pinimg.com/564x/cf/43/53/cf4353421062e1db26b35a8e3608cdfd.jpg",
      "rating": { "rate": 4.9, "count": 113 }
    }
  ]
  

  getProducts() {
    return this.products;
  }

  getProductsById(id: number){
    return this.products.find((product) => product.id === id)
  }

  getFeaturedProducts(){
    return this.products.filter((item) => item.featured===true)
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  editProduct(product: Product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
  }

  constructor() {}
}
