import {Component, ContentChild} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SBItemBody} from './sb-item-body';
import {SqueezeBox} from './squeezebox';

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
    
    public collapsed: boolean = true;
    
    @ContentChild(SBItemBody) body: SBItemBody;

    constructor(private squeezebox: SqueezeBox) {}

    toggle(collapsed: boolean) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
    }
    
    applyToggle(collapsed: boolean) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    }

}
