import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {

  @Input() item: any;
  @Output() remove = new EventEmitter<number>();

  onRemove(){
    this.remove.emit(this.item.id);
  }
}
