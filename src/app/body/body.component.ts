import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
constructor()
{

}
title = "Ürün Listesi"
products: any[] =
[
  {id:1,name:"Asus X540 İ7 12. Nesil 16GB GTX 1650 1TB m.2 SSD", CategoryId:1,description:"ASUS X540, 16GB'a kadar RAM ve Nvidia ekran kartı ile harika grafikler sunmaktadır. Günlük bilgi işlem ve eğlence için ideal bir dizüstü bilgisayar."},
  {id:2,name:"Monster Abra V7.15.2 i7 12500 16GB GTX 3050 1TB m.2 SSD", CategoryId:1,description:"En çok tercih edilen oyuncu bilgisayarı Monster Notebook  12. Nesil yüksek performanslı H serisi işlemciler ile yenilendi. Bu yenilenmiş canavar, bir dizüstü bilgisayarın verebileceklerinin ötesinde sonuçlar veriyor."},
]
ngOnInit() {
}

}
