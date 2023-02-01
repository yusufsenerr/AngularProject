import { Pipe, PipeTransform } from '@angular/core';
import { products } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: products[] , FilterText?: any): products[] {
    FilterText =  FilterText?FilterText.toLocaleLowerCase():null  

    return FilterText?value.filter((p:products)=> p.Name
    .toLocaleLowerCase().indexOf(FilterText)!==-1):value;
  }

}
