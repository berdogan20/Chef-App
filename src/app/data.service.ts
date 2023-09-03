/* Data service
  - all users
  - all foods with categories
  - all orders
*/


import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { User } from './user.model';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* This map will hold the categories and conrresponding foods */
  /* key: category, value: corresponding Food array */
  public foodMap = new Map<string, Food[]>([
    ["Pizza", [
    new Food("Denizci", "Özel Pizza Sosumuz, mozarella, mısır, taze soğan, domates ve ton balığı ile denize açılma vakti!",
             "https://www.papajohns.com.tr/upload/big/image5e56fb9cd11bc.jpg",
             35, 15),
    new Food("Vegan", "Hayvansal gıda içermeyen (Mozeralla içermeyen) veganlara özel yaptığımız, Taze Domates,Taze Mantar, Soğan,Yeşil Biber,Siyah Zeytin ve Mısır'dan oluşan Vegan Pizzamız.",
            "https://www.papajohns.com.tr/upload/big/image5e56fbf83ea3f.jpg", 32, 12)
    ]],
    ["Burger", [
      new Food("Hesaplı Menü", "1 McChicken™ + 1 Orta Patates + 1 Orta Coca-Cola + 8'li Çıtır Soğan Halkaları", 
               "https://siparis.mcdonalds.com.tr/Files/Product/Menus/WEB3_1076.jpg", 25, 10),
      new Food("Köfte Burgerli Tok Artık Menüsü", "4 Adet Köfte Burger + 1 Adet Büyük Boy Patates + 2 Adet Orta Boy İçecek",
            "https://siparis.mcdonalds.com.tr/Files/Product/Menus/WEB3_1005.jpg", 22, 12)
    ]],
    ["Breakfast", [
      new Food("Sıcak Kahvaltı Tabağı", "Haşlanmış yumurta, Reçel, ızgara hellim peyniri, Kızarmış sosis, Domates, Salatalık, Zeytin, Sigara böreği.",
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/03/lokma-rumeli-hisari-kahvalti-2022.jpg", 40, 8)
    ]],
    ["Sushi", [
      new Food("Pad Thai Tavuk", "Pirinç eriştesi, tavuk göğüs, soya filizi, taze soğan, fıstık, yumurta, lime ve pul biber ile", 
      "https://www.sushico.com.tr/site/products/big/1682930248_1.jpg", 20, 6),
      new Food("Süper Salmon Roll", "Somon, krem peynir, salatalık / Kızarmış panko, yuzu mayonez ", 
      "https://www.sushico.com.tr/site/products/big/1682930694_1.jpg", 15, 7),
      new Food("Pad Thai Karides", "Pirinç eriştesi, karides, soya filizi, taze soğan, fıstık, yumurta, lime ve pul biber ile. ",
      "https://www.sushico.com.tr/site/products/big/1682930406_1.jpg", 20, 10),
      new Food("Tom Yum", "Karides, shitake mantar, çeri domates, limon çubuğu, kırmızı soğan, kişniş,",
      "https://www.sushico.com.tr/site/products/big/1682929149_1.jpg", 15, 5)
    ]],
    ["Soup", [
      new Food("Deniz Mahsüllü Çorba", "Hindistan cevizi sütü, levrek, somon, kalamar, kırmızı soğan, havuç, çin acı sosu, kişniş, ",
      "https://www.sushico.com.tr/site/products/big/1667254274_1.jpg", 24, 8),
      new Food("Wonton Çorbası", "Çin Mantısı (3 Ad), taze soğan, yumurta.", 
      "https://www.sushico.com.tr/site/products/big/1303651819_1.jpg", 15, 5)
    ]],
    ["Salad", [
      new Food("Füme Somonlu Asian Salata", "Somon füme, soya filizi, havuç, kırmızı soğan, domates, mix yeşillik, fıstık, avokado, mikro filiz, yuzu soya sos ile.", 
      "https://www.sushico.com.tr/site/products/big/1682929692_1.jpg", 20, 4),
      new Food("Asian Salad", "Soya filizi, havuç, kırmızı soğan, domates, mix yeşillik, fıstık, avokado, mikro filiz, yuzu soya sos ile.",
      "https://www.sushico.com.tr/site/products/big/1667257901_1.jpg", 18, 12)
    ]]
  ]);

  public users: User[] = [
    new User("a@gmail.com", "a", "a"),
    new User("b@gmail.com", "b", "b"),
    new User("c@gmail.com", "c", "c"),
    new User("d@gmail.com", "d", "d"),
    new User("e@gmail.com", "e", "e"),
    new User("admin@gmail.com", "admin", "address")
  ];
  public orders: Order[] = [];
  public currentUser: User = new User("beyzaerdogan186@gmail.com",
  "beyza", "address");
  // public currentUser: User;
  public admin: boolean = false;


  constructor() { }

  getFoods(category: string){
    return this.foodMap.get(category);
  }


}
