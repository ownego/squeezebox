import {Component, ElementRef, Renderer} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SBItemBody} from './squeezebox';

@Component({
    selector: 'sb-item',
    template: `
        <div class="sb-item" [ngClass]="{'is-collapsed': collapsed}">
            <ng-content></ng-content>
        </div>
    `,
    directives: [NgClass]
})
export class SBItem {
    
    private collapsed: boolean = true;

    public body: SBItemBody = null;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    toggle(collapsed: boolean) {
        this.collapsed = collapsed;
        if (this.body) {
            this.body.toggle(collapsed);
        }
    }
}
