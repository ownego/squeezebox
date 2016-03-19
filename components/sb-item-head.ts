import {Component, ElementRef, Renderer} from 'angular2/core';
import {SBItem} from './sb-item';

@Component({
    selector: 'sb-item-head',
    template: `
        <div class="sb-item-head">
            <a href="#" (click)="toggleClick($event)"><ng-content></ng-content><span class="toggle-icon"></span></a>
        </div>
    `
})
export class SBItemHead {

    constructor(private sbItem: SBItem, private el: ElementRef, private renderer: Renderer) {}
    
    toggleClick(event) {
        event.preventDefault();
        this.sbItem.collapsed = !this.sbItem.collapsed;
        this.sbItem.toggle(this.sbItem.collapsed);
    }
}
