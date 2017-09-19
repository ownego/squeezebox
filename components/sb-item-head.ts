import {Component} from '@angular/core';
import {SBItem} from './sb-item';

@Component({
    exportAs: 'sbItemHead',
    selector: 'sb-item-head',
    template: `
        <div class="sb-item-head">
            <a role="button" (click)="toggleClick($event)"><ng-content></ng-content>
                <span class="toggle-icon">
                    <i class="fa fa-caret-down"></i>
                </span>
            </a>
        </div>
    `
})
export class SBItemHead {

    constructor(private sbItem: SBItem) {}

    toggleClick(event:Event) {
        event.preventDefault();
        this.sbItem.expanded = !this.sbItem.expanded;
        this.sbItem.toggle(this.sbItem.expanded);
    }
}
