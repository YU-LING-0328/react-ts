/* eslint-disable */
// TS 01-1 原始型別 Primitive Type
let str: string = "xinMedia";
const num: number = 1
const flag: boolean = true;
const un: undefined = undefined;
const emp: null = null;

// TS 01-2 string/number/boolean 可為undefined & null 的子集  
// (需調整tsConfig.json中的strictNullCheck: false)
str = null;
str = undefined;

// TS 01-3 類型推論 
let a;  // 若未定義 => any 任意型別
a = 'string';
a = 123;

let word = 'word'; // TS會自動辨別類型為string
// word = 123


// TS 01-4  Union Type 聯合類型 |
let muchType: string | number = "hello World";

// 若要調用類型方法則必須符合該類型的方法
muchType.split("")
muchType = 100;
// muchType.split("")   





// const os = {
//     apple: 'macOS',
//     microsoft: 'windows'
// }



// Q: 今天如果有個api 傳進來的data內容是不可控的? 那要如何定義型別?
// 泛型、 keyOf Partial 去繼承 



console.log(num, flag, un, emp);
console.log(a);
console.log(str);
console.log(word);
console.log(person);
console.log(animalOne);
console.log(arr, arr1, arr2);
console.log(tp)
export { }