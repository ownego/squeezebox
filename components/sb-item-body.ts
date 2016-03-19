import {Component, ElementRef, Renderer, HostBinding} from 'angular2/core';

@Component({
    selector: 'sb-item-body',
    template: `
        <div class="sb-item-body" [style.height]="height">
            <div class="inner"><ng-content></ng-content></div>
        </div>
    `
})
export class SBItemBody {

    private height: String = '0';
    
    constructor(private el: ElementRef, private renderer: Renderer) {}
    
    toggle(collapsed: boolean) {
        var height: String = '0';
        if (!collapsed) {
            var bodyEl = this.el.nativeElement.querySelector('.sb-item-body');
            bodyEl.style.height = 'auto';
            height = bodyEl.offsetHeight + 'px';
            bodyEl.style.height = '0';
        }
        setTimeout(() => this.height = height, 50);
        
    }
}
