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
window.addEventListener('touchmove', handleTouchMove);
window.addEventListener('touchend', handleMouseUp);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);

handleTouchStart = (key, pressLocation, e) => {
  if(!this.props.isGridLocked){
    // console.log("handleTouchStart", key, pressLocation, e.touches[0])
    handleMouseDown(key, pressLocation, e.touches[0]);
  }
};

handleTouchMove = (e) => {
  if(!this.props.isGridLocked){
    e.preventswipe();
    handleMouseMove(e.touches[0]);
  }
};

handleMouseMove = ({pageX, pageY}) => {
  sortable.handleMouseMove({pageX, pageY})
  let st = sortable.get_state()
  ....
};

handleMouseDown = (pos, [pressX, pressY], {pageX, pageY}) => {
  // console.log("handleMouseDown:::", pos)
  sortable.handleMouseDown(pos, [pressX, pressY], {pageX, pageY})
  let st = sortable.get_state()
  ...

};

handleMouseUp = () => {
    sortable.handleMouseUp()
    let st = sortable.get_state()
    ...
};
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
