# develexe-sortable
Tool for development sortable components on JavaScript

## Supports:

- multi rows and cols,
- size of item,
- two sortable mode,
- drag and drop with touching,
- different content and style of item

## Usage

Install packages in your project:

```sh
$ npm i --save develexe-sortable
```

Import Sortable class:
```javascript
import Sortable from 'develexe-sortable';
```

Use Sortable class:
```javascript
sortable = new Sortable(
  props.cellWidth,
  props.cellHeight,
  props.cellSpacing,
  props.mode,
  props.cells,
  props.isDropOnEmptyAreaAllowed
);
state = sortable.get_state();
```

Add events:
```javascript
sortable = new Sortable(
  cellWidth,               // set width item
  cellHeight,              // set height item
  cellSpacing,             // set distance between items
  mode,                    //set sortable mode: "SWAP" or "SORT"
  cells,                   // array of items with options
  isDropOnEmptyAreaAllowed // allow to move on empty cell
);
state = sortable.get_state();
```

## Build

```javascript
git clone https://github.com/chybatronik/develexe-sortable
```

Build
```javascript
npm run build
```

License
----

MIT

[//]: #
