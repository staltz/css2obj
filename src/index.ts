function wholeArray(strs: Array<string>, vals: Array<any>): Array<any> {
  let resultArray: Array<any> = [];
  for (let i = 0, N = strs.length, M = vals.length; i < N || i < M; i++) {
    if (i < N) {
      resultArray = resultArray.concat(strs[i]);
    }
    if (i < M) {
      resultArray = resultArray.concat(vals[i]);
    }
  }
  return resultArray
    .join('')
    .split(/[\:\;]/g)
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

export default function css2obj(strings, ...values) {
  const obj = {};
  let index = 0;
  const strsAndVals = wholeArray(strings, values);
  let key = '';
  strsAndVals.forEach((part, i) => {
    if (i % 2 === 0) {
      key = part;
    } else {
      obj[key] = `${part}`;
    }
  });
  return obj;
}
