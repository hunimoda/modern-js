//  // 예제 27-04
//  const arr = ["apple", "banana", "orange"];
//
//  console.log(arr.length);
//  for (let i = 0; i < arr.length; i++) {
//  	console.log(arr[i]);
//  }

//  //  예제 27-06
//  const arr = [1, 2, 3];
//  console.log(arr.constructor === Array);
//  console.log(Object.getPrototypeOf(arr) === Array.prototype);

//// 예제 27-08
//function linearSearch(array, target) {
//	const length = array.length;
//
//	for (let i = 0; i < length; i++) {
//		if (array[i] === target) {
//			return i;
//		}
//	}
//
//	return -1;
//}
//
//console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
//console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));

//// 예제 27-09
//console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

// 예제 27-11
const arr = [];
console.time("Array Performance Test");

for (let i = 0; i < 10000000; i++) {
	arr[i] = i;
}
console.timeEnd("Array Performance Test");

const obj = {};
console.time("Object Performance Test");

for (let i = 0; i < 10000000; i++) {
	obj[i] = i;
}
console.timeEnd("Object Performance Test");
