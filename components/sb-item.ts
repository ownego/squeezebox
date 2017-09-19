import {Component, ContentChild, Input, Output, EventEmitter, Inject, forwardRef} from '@angular/core';
import {SBItemBody} from './sb-item-body';
import {SqueezeBox} from './squeezebox';

@Component({
    exportAs: 'sbItem',
    selector: 'sb-item',
    template: `
        <div class="sb-item" [ngClass]="{'is-expanded': expanded}">
            <ng-content></ng-content>
        </div>
    `
})
export class SBItem {

    private squeezebox:SqueezeBox;

    @Input() public expanded: boolean = false;
    @Output() onToggled =  new EventEmitter();

    @ContentChild(SBItemBody) body: SBItemBody;

    constructor(@Inject(forwardRef(() => SqueezeBox)) squeezebox: SqueezeBox) {
        this.squeezebox = squeezebox;
    }

    ngAfterViewInit() {
        this.body.toggle(this.expanded);
    }

    toggle(expanded: boolean) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(expanded);
        this.onToggled.emit(expanded);
    }

    applyToggle(expanded: boolean) {
        this.expanded = expanded;
        this.body.toggle(expanded);
    }

}
