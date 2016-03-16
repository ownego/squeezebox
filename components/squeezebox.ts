import {Component, ElementRef, Renderer} from 'angular2/core';
import {SBItem} from './squeezebox';

@Component({
    selector: 'squeezebox',
    template: `
        <div class="squeezebox">
            <ng-content></ng-content>
        </div>
    `
})
export class SqueezeBox {
    
    // public items: SBItem[] = [];

    constructor(private el: ElementRef, private renderer: Renderer) {}
    
    // addItem(item: SBItem) {
    //     this.items.push(item);
    // }  
}

export * from './sb-item';
export * from './sb-item-head';
export * from './sb-item-body';
