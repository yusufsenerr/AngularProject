import { Component, OnInit } from '@angular/core';
import { products } from './product';

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
FilterText = ""
products: products[] =
[
  {Id:1,Name:"Asus X540 İ7 12. Nesil 16GB GTX 1650 1TB m.2 SSD", CategoryId:1,Category:"Laptop & Notebook",Description:"ASUS X540, 16GB'a kadar RAM ve Nvidia ekran kartı ile harika grafikler sunmaktadır. Günlük bilgi işlem ve eğlence için ideal bir dizüstü bilgisayar.",Price:12500,ImageUrl:"https://cdn.akakce.com/z/asus/asus-x515ea-bq1185w-intel-i5-1135g7-8gb-ram-512gb-ssd-iris-xe-15-6-fhd-ips-w11-notebook.jpg"},
  {Id:2,Name:"Monster Abra V7.15.2 i7 12500 16GB GTX 3050 1TB m.2 SSD", CategoryId:1,Category:"Laptop & Notebook",Description:"En çok tercih edilen oyuncu bilgisayarı Monster Notebook  12. Nesil yüksek performanslı H serisi işlemciler ile yenilendi. Bu yenilenmiş canavar, bir dizüstü bilgisayarın verebileceklerinin ötesinde sonuçlar veriyor.",Price:14890,ImageUrl:"https://img-monsternotebook.mncdn.com/UPLOAD/urun-gorselleri-yeni/ABRA/A5-V17-2/thumb/Abra_A5_v17_-_NH58_TR_-_rtx3050ti_medium.png"},
]
ngOnInit() {
}

}
