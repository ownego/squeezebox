import {Component, Input, ContentChildren, QueryList, forwardRef} from 'angular2/core';
import {SBItem} from './sb-item';

@Component({
    selector: 'squeezebox',
    template: `
        <div class="squeezebox">
            <ng-content></ng-content>
        </div>
    `
})
export class SqueezeBox {
    
    @Input() multiple: boolean = true
    
    @ContentChildren(forwardRef(() => SBItem)) items: QueryList<SBItem>;
    
    constructor() {}
    
    didItemToggled(item: SBItem) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(i => i.applyToggle(true));
            item.applyToggle(false);
        }
    }

}
