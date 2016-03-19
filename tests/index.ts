// typings reference added
// please see breaking changes under: 
// https://github.com/angular/angular/blob/master/CHANGELOG.md#user-content-200-beta6-2016-02-11
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {SqueezeBox, SBItem, SBItemHead, SBItemBody} from '../squeezebox';

console.info('booting app...');

@Component({
    selector: 'app',
    template: `
        <div>
            <squeezebox [multiple]="false">
                <sb-item  *ngFor="#item of itemsList">
                    <sb-item-head>{{item.title}}</sb-item-head>
                    <sb-item-body>{{item.description}}</sb-item-body>
                </sb-item>
            </squeezebox>
        </div>
    `,
    directives: [SqueezeBox, SBItem, SBItemHead, SBItemBody]
})
export class App {
    
    private itemsList:Object[] = [
        {
        title: 'Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
        },
        {
        title: 'Item 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'
        }
    ]
    
    constructor() {
        
    }
    
}


bootstrap(App, []);
