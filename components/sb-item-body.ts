import {Component, ElementRef, Renderer, ViewChild} from '@angular/core';

@Component({
    exportAs: 'sbItemBody',
    selector: 'sb-item-body',
    template: `
        <div #body class="sb-item-body" style="height: 0; display: none;">
            <div class="inner"><ng-content></ng-content></div>
        </div>
    `
})
export class SBItemBody {

    @ViewChild('body') bodyEl: ElementRef;

    constructor(private renderer: Renderer) {}

    ngAfterViewInit() {
        const el = this.bodyEl.nativeElement;
        el.addEventListener('transitionend', (e:TransitionEvent) => {
            // check transition ended, so can use regular height if not expanded
            if (el.offsetHeight !== 0) {
                this.setHeight('auto');
            }
        }, false);

        setTimeout(() => {
            this.renderer.setElementStyle(el, 'display', 'block');
        }, 200);
    }

    toggle(expanded: boolean) {
        let height: string = '0';
        const el = this.bodyEl.nativeElement;
        this.setHeight('auto');
        height = el.offsetHeight + 'px';
        if (expanded) {
            this.setHeight('0');
        } else {
            this.setHeight(height);
            height = '0';
        }
        setTimeout(() => this.setHeight(height), 50);
    }

    setHeight(height: string) {
        const el = this.bodyEl.nativeElement;
        this.renderer.setElementStyle(el, 'height', height);
    }
}
