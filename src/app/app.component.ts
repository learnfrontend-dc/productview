import { Component, TemplateRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public modalRef: BsModalRef;
  windowListener: Function;

  public productlist : any[] = [
    {
      productname : 'JBL Flip 4',
      code : 'cat1-0001',
      price : 18.01,
      cartprice : 0,
      available : 10,
      qty : 0
    }, {
      productname : 'Bose Sound Link',
      code : 'cat1-0010',
      price : 129.05,
      cartprice : 0,
      available : 9,
      qty : 0
    }, {
      productname : 'AB Portable',
      code : 'cat1-0008',
      price : 19.78,
      cartprice : 0,
      available : 11,
      qty : 0
    }, {
      productname : 'AE-9 Portable',
      code : 'cat1-0011',
      price : 299.99,
      cartprice : 0,
      available : 8,
      qty : 0
    }, {
      productname : 'JBL Pulse 3',
      code : 'cat1-0009',
      price : 23.05,
      cartprice : 0,
      available : 10,
      qty : 0
    }
  ];
  constructor(private modalService: BsModalService, private sanitizer: DomSanitizer, 
    private renderer: Renderer2) {
      this.windowListener =
      renderer.listen('window', 'message', this.processMessage.bind(this));
  }


  processMessage(event: Event) {
   
    const message = event as MessageEvent;
    let productObj=message.data;
    for(let product of this.productlist) {
      if(product.productname === productObj['productname']) {
        product.qty= productObj['qty'];
        break;
      }
    }
  }
  public productCartUrl=this.sanitizer.bypassSecurityTrustResourceUrl("https://productcart-dc.herokuapp.com/");
  public addToCart(product) {
    if(product.qty === product.available) {
      console.log('Product not in stock.');
    } else {
      product.qty = product.qty + 1;
      window.frames[0].postMessage(product, '*');
    }
    
  }
}