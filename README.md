[<img src="https://david-dm.org/asotog/squeezebox.svg">](https://david-dm.org/asotog/squeezebox)

# Squeezebox
Simple Angular 2 accordion component with smooth transitions/animations

<img alt="Screenshot 1" width="300" src="https://raw.githubusercontent.com/asotog/squeezebox/master/screenshot-1.png">

### Live Sample
Running sample can be seen [here](http://plnkr.co/edit/DSNuVy5iOQsFag7FZQcT?p=preview) , but this is not for real use case, so for real usage take a look at the following references: installation via npm, typescript usage, etc

### Installation via npm
` npm install squeezebox --save`

### Typescript Usage
Import the modules wherever are going to be used:

`import {SqueezeBox, SBItem, SBItemHead, SBItemBody} from 'squeezebox/squeezebox';`

Inject the components to the parents component's annotation:

`directives: [SqueezeBox, SBItem, SBItemHead, SBItemBody]`

Start using it in the component template:

```
<squeezebox>
    <sb-item>
        <sb-item-head>Title 1</sb-item-head>
        <sb-item-body>Lorem ipsum dolor sit amet</sb-item-body>
    </sb-item>
</squeezebox>
```

or iterate a data list

```
<squeezebox>
    <sb-item  *ngFor="#item of itemsList">
        <sb-item-head>{{item.title}}</sb-item-head>
        <sb-item-body>{{item.description}}</sb-item-body>
    </sb-item>
</squeezebox>
```

### Options

*   **multiple:boolean** (default: true) => this attribute enable/disable the multiple item expanded at the same time, for example: `... <squeezebox [multiple]="false"> ...` 

### SystemJS configuration
Will need to [map](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#map) the module:
```
map: {
    "squeezebox": "npm:squeezebox",
    ...
}
```

### Styles
Styles needs to be included, imported or copied, also feel free to modify the styles:
```
<link rel="stylesheet" href="/node_modules/squeezebox/styles.css">
```
