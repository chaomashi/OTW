ES2020 新语法
-----

## 可选链操作符 ?.

```angular2html
 Uncaught TypeError: Cannot read property..

obj.hasOwnProperty('first') && obj.first.hasOwnProperty('second')

let nestedProp = obj && obj.first && obj.first.second;

let nestedProp = obj?.first?.second;
```

## 空位合并操作符 ??

```angular2html
let c = a ? a : b // 方式1
let c = a || b // 方式2
let c = a ?? b;
// 等价于let c = a !== undefined && a !== null ? a : b;
```