// ─── Arrays ───────────────────────────────────────────

// 1. customMap
// iterate over arr, apply cb to each item, return new array
export function customMap(arr, callbackFn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callbackFn(arr[i], i, arr));
  }

  return newArr;
}

// 2. customFilter
// iterate over arr, keep items where cb returns true

export function customFilter(arr, callbackFn) {
  const filteredArr = [];

  for (const element of arr) {
    if (callbackFn(element)) {
      filteredArr.push(element);
    }
  }

  return filteredArr;
}

// 3. customReduce
// iterate over arr, accumulate a single value using cb + initialValue

export function customReduce(arr, callbackFn, initialValue) {
  // let accumulator = initialValue ? initialValue : arr[0];
  let accumulator = initialValue !== undefined ? initialValue : arr[0];

  // const startingIndex = initialValue ? 0 : 1;
  const startingIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startingIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

// 4. groupBy
// iterate over arr, group objects by a given property key

export function groupBy(arr, callbackFn) {
  const obj = {};

  // If a string property name is passed, turn it into a lookup function
  const getGroupKey =
    typeof callbackFn === "function" ? callbackFn : (item) => item[callbackFn];

  for (let i = 0; i < arr.length; i++) {
    const newKey = getGroupKey(arr[i]); // Calls the normalized function

    obj[newKey] ||= [];
    obj[newKey].push(arr[i]);

    // if(newKey in obj){
    //   obj[newKey].push(arr[i]);
    // }
    // else{
    //   obj[newKey] = [arr[i]];
    // }
  }
  return obj;
}

// 5. flattenArray
// recursively flatten a deeply nested array into a single level

export function flattenArray(arr) {
  let flattenedArray = [];

  for (const element of arr) {
    if (!Array.isArray(element)) flattenedArray.push(element);
    else {
      flattenedArray.push(...flattenArray(element));
    }
  }
  return flattenedArray;
}
