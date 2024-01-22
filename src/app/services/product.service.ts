import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    {
      "id": 1,
      "title": "Herbamil",
      "description": "Menyuburkan kandungan dengan minum Herbamil adalah pilihan yang sangat tepat karena herbamil bersifat membuang racun yang ada di rahim serta meningkatkan kualitas kinerja rahim dan kandungan sehingga promil bisa cepat terlaksana",
      "img": "https://d2j6dbq0eux0bg.cloudfront.net/images/35500059/1811047420.jpg",
      "price": 245,
      "rating": 4.6,
      "category": "Herbal"
    },
    {
      "id": 2,
      "title": "Hervago - Obat Vertigo, Migrain",
      "description": "HERVAGO adalah Herbal yang terbuat dari bahan-bahan alami, yang dibuat khusus untuk membantu mengatasi Vertigo, Pusing Kepala, Kepala Berputar, Kliyengan, Kepala Berat, Kepala Sakit, Pusing Berat, Kurang Stamina, Penambah Imunitas Tubuh, Sakit Kepala Akibat Sinusitis, Migrain. HERVAGO terbuat dari 100% bahan-bahan alami pilihan dengan kualitas terbaik dan telah diuji yang sehingga sangat sinergis untuk bantu atasi Vertigo dan Migrain.",
      "img": "https://d2j6dbq0eux0bg.cloudfront.net/images/35500059/1818032402.jpg",
      "price": 149,
      "rating": 4.7,
      "category": "Herbal"
    },
    {
      "id": 3,
      "title": "Ambeyes Obat Herbal Wasir / Ambeien",
      "description": "AMBEYES adalah Herbal yang terbuat dari bahan-bahan alami, dan dibuat khusus untuk membantu mengatasi Ambeien dan Wasir. AMBEYES terbuat dari 100% bahan-bahan alami pilihan dengan kualitas terbaik dan telah diuji yang diproses dengan teknologi nano sehingga sangat sinergis untuk bantu atasi ambeien dan wasir.",
      "img": "https://d2j6dbq0eux0bg.cloudfront.net/images/35500059/1608526687.jpg",
      "price": 285,
      "rating": 4.6,
      "category": "Herbal"
    },
    {
      "id": 4,
      "title": "Co-Vitamin",
      "description": "Co-Vitamin adalah suplemen berkhasiat untuk menambah imunitas tubuh, sangat dibutuhkan untuk menangkal VIRUS dan sebagai Antioksidan penangkal radikal bebas ditengah pandemi. Khasiat terbukti yang terbaik, aman tanpa efek samping. Terbuat dari bahan alami yang telah teruji klinis dan di prose secara modern sehingga tercipta produk yang berkualitas.",
      "img": "https://d2j6dbq0eux0bg.cloudfront.net/images/35500059/1798766121.jpg",
      "price": 145,
      "rating": 4.8,
      "category": "Herbal"
    },
    {
      "id": 5,
      "title": "Herblis Obat Sipilis , Ghonore, Kencing Nanah",
      "description": "Obat herbal sipilis ( raja singa ) HERBPLIS produk herbal dari tumbuhan Herbal 100% Alami yang bermanfaat mengobati luka pada bagian kelamin dan rasa nyeri saat buang air kecil, dan juga ampuh menyembuhkan pendarahan / keluar nanah saat buang air. obat HerbPlis akan bekerja secara alami menyembuhkan Sipilis dari dalam.",
      "img": "https://d2j6dbq0eux0bg.cloudfront.net/images/35500059/1608569655.jpg",
      "price": 245,
      "rating": 4.3,
      "category": "Herbal"
    },
    {
      "id": 6,
      "title": "Herbatih - Obat Keputihan Herbal Alami",
      "description": "Herbatih merupakan Obat Herbal khusus wanita ramuan pilihan yang ampuh untuk membantu perawatan kesehatan organ intim wanita, serta membantu meningkatkan kualitas keharmonisan hubungan suami istri, membantu menghilangkan keputihan, bau pada organ intim, rasa gatal, serta luka di bagian luar miss V Untuk keputihan yang tidak normal",
      "img": "https://d2j6dbq0eux0bg.cloudfront.net/images/35500059/1608572801.jpg",
      "price": 245,
      "rating": 4.3,
      "category": "Herbal"
    }
  ]

  getProducts(){
    return this.products
  }

  constructor() { }
}
