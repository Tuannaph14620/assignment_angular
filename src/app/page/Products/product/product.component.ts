import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList! : IProduct[]
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductList()
  }
  getProductList(){
    this.productService.getProductList().subscribe(data => {
      this.productList = data
    })
  }

  onHandleRemove(id: number){
    this.productService.removeProduct(id).subscribe(data =>{
      this.productList = this.productList.filter(item => item.id !== id)
    })
  }

  
}
