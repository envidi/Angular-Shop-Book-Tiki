import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Thực hiện điều kiện tìm kiếm ở đây, ví dụ dưới đây so sánh tên sản phẩm
      return item.name.toLowerCase().includes(searchText);
    });
  }

}
