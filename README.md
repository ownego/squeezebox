[<img src="https://david-dm.org/asotog/squeezebox.svg">](https://david-dm.org/asotog/squeezebox)

# Squeezebox
Simple Angular 2 accordion component

### TODO: samples coming soon

### Installation
` npm install squeezebox --save`

### Typescript Usage
Import the modules wherever are going to be used:

`import {SqueezeBox, SBItem, SBItemHead, SBItemBody} from 'squeezebox/components/squeezebox';`

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

### SystemJS configuration
Will need to [map](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#map) the module:
```
map: {
    "squeezebox": "npm:squeezebox",
    ...
}
```

### Styles
Styles needs to be included, imported or copied:
```
<link rel="stylesheet" href="/node_modules/squeezebox/styles.css">
```
