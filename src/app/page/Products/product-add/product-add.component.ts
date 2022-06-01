import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { IProduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product : IProduct = {
    name: "",
    price: 0,
    quantity: 0,
    image: "",
    createdAt: new Date()
  }
  constructor(
    private productService : ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.productService.getProduct(id).subscribe(data => this.product = data)
    }
  }
  onSubmit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.productService.updateProduct(this.product).subscribe(data => {
        this.router.navigateByUrl('/product')
      })
    }
    else{
      this.productService.addProduct(this.product).subscribe(data => {
        this.router.navigateByUrl('/product')
      })
    }
  }

  async onChangeGetImg(e: any) {
    const file = e.target.files[0]
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"
    const formData = new FormData()

    formData.append('file', file);
    formData.append('upload_preset', "cyfbktyp");
    const response = await axios.post(CLOUDINARY_API, formData, {
      headers: {
        "Content-Type": "application/form-data"
      }
    })
    console.log(response.data.url);
    this.product.image = response.data.url
  }
}
