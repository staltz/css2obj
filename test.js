import test from 'ava';
import css2obj from './lib/index';

test('plain simple CSS properties to object', t => {
  const obj = css2obj`
    position: absolute;
    left: 20;
    bottom: 30;
  `;

  t.is(JSON.stringify(obj), '{"position":"absolute","left":"20","bottom":"30"}');
  t.pass();
});

test('simple CSS properties with one interpolation to object', t => {
  const b = 30;
  const obj = css2obj`
    position: absolute;
    left: 20;
    bottom: ${b};
  `;

  t.is(JSON.stringify(obj), JSON.stringify({
    'position': 'absolute',
    'left': '20',
    'bottom': '30',
  }));
  t.pass();
});

test('plain complex CSS properties to object', t => {
  const obj = css2obj`
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0 1px 1px 0 #c5c5c5;
    color: #686868;
    border: none;
    font-size: 20px;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 4px;
    cursor: pointer;
  `;

  t.is(JSON.stringify(obj), JSON.stringify({
    'background-color': 'rgba(0, 0, 0, 0)',
    'box-shadow': '0 1px 1px 0 #c5c5c5',
    'color': '#686868',
    'border': 'none',
    'font-size': '20px',
    'text-align': 'center',
    'width': '30px',
    'height': '30px',
    'line-height': '30px',
    'margin': '4px',
    'cursor': 'pointer',
  }));
  t.pass();
});

test('complex CSS properties with 3 interpolations to object', t => {
  const smallSpace = 4;
  const largeSpace = 30;
  const grey = '#686868';
  const obj = css2obj`
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0 1px 1px 0 #c5c5c5;
    color: ${grey};
    border: none;
    font-size: 20px;
    text-align: center;
    width: ${largeSpace}px;
    height: ${largeSpace}px;
    line-height: ${largeSpace}px;
    margin: ${smallSpace}px;
    cursor: pointer;
  `;

  t.is(JSON.stringify(obj), JSON.stringify({
    'background-color': 'rgba(0, 0, 0, 0)',
    'box-shadow': '0 1px 1px 0 #c5c5c5',
    'color': '#686868',
    'border': 'none',
    'font-size': '20px',
    'text-align': 'center',
    'width': '30px',
    'height': '30px',
    'line-height': '30px',
    'margin': '4px',
    'cursor': 'pointer',
  }));
  t.pass();
});