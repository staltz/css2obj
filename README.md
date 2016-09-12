# css2obj

Takes CSS-looking properties as an ES6 tagged template literal and returns an object suitable for `styles.registerStyle()` in [Free-Style](https://github.com/blakeembrey/free-style).

```
npm install css2obj
```

Raw example:

```js
const thirty = 30;
const obj = css2obj`
  position: absolute;
  left: 20px;
  bottom: ${thirty}px;
`;

console.log(obj);
/*
{
  'position': 'absolute',
  'left': '20px',
  'bottom': '30px'
}
*/
```

Example with Free-Style:

```js
const thirty = 30;

styles.registerStyle(css2obj`
  position: absolute;
  left: 20px;
  bottom: ${thirty}px;
`);
```
