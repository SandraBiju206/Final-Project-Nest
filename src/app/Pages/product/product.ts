import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  //  repeat = Array.from({ length:6 });
  products: any[] = [];
  // api service object declare cheythu
  constructor(private apiservice: Apiservice, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data.products;
      this.cdr.detectChanges();
    })
  }

}

