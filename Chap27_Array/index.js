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

//// 예제 27-11
//const arr = [];
//console.time("Array Performance Test");
//
//for (let i = 0; i < 10000000; i++) {
//	arr[i] = i;
//}
//console.timeEnd("Array Performance Test");
//
//const obj = {};
//console.time("Object Performance Test");
//
//for (let i = 0; i < 10000000; i++) {
//	obj[i] = i;
//}
//console.timeEnd("Object Performance Test");

//// 예제 27-13
//const arr = [1, 2, 3];
//console.log(arr.length);
//
//arr.push(4);
//console.log(arr.length);
//
//arr.pop();
//console.log(arr.length);

//// 예제 27-14
//const arr = [1, 2, 3, 4, 5];
//arr.length = 3;
//console.log(arr);
//
//const arr2 = [1];
//arr2.length = 3;
//console.log(arr2.length);
//console.log(arr2);

//// 예제 27-17
//const sparse = [, 2, , 4];
//console.log(sparse.length);
//console.log(sparse);
//
//console.log(Object.getOwnPropertyDescriptors(sparse));

//// 예제 27-20
//const arr = [1, , 3];
//console.log(arr.length);
//console.log(arr);
//console.log(arr[1]);

//// 예제 27-21
//const arr = new Array(10);
//console.log(arr);
//console.log(arr.length);
//console.log(Object.getOwnPropertyDescriptors(arr));

//// 예제 27-23
//console.log(new Array(2 ** 32 - 1).length);
//console.log(new Array(2 ** 32).length);
//console.log(new Array(-1).length);
//console.log(new Array());
//console.log(new Array(1, 2, 3));
//console.log(new Array({}));
//console.log(Array(1, 2, 3, 4));

//// 예제 27-27
//console.log(Array.of(1));
//console.log(Array.of(1, 2, 3));
//console.log(Array.of("string"));
//console.log(Array.of({}));

//// 예제 27-29
//console.log(Array.from({ length: 3 }));
//console.log(Array.from("hello"));
//console.log(Array.from({ length: 3 }, (_, i) => i));

//// 예제 27-30
//const arrayLike = {
//	0: "apple",
//	1: "banana",
//	2: "orange",
//	length: 3,
//};
//for (let i = 0; i < arrayLike.length; i++) {
//	console.log(arrayLike[i]);
//}

//// 예제 27-31
//const arr = [1, 2, 3];
//console.log(arr[0]);
//console.log(arr[2]);
//console.log(arr[3]);
//
//const sparse = [1, , 3];
//console.log(sparse[1]);

//// 예제 27-34
//const arr = [0];
//
//arr[1] = 1;
//
//console.log(arr);
//console.log(arr.length);
//
//arr[100] = 100;
//
//console.log(arr);
//console.log(arr.length);
//
//console.log(Object.getOwnPropertyDescriptors(arr));

//// 예제 27-38
//const arr = [];
//
//arr[0] = 1;
//arr["1"] = 2;
//
//console.log(arr);
//
//arr["foo"] = 3;
//arr.bar = 4;
//arr[1.1] = 5;
//arr[-1] = 6;
//
//console.log(arr);
//console.log(arr.length);

// 예제 27-39
const arr = [1, 2, 3];

delete arr[1];
console.log(arr);
console.log(arr.length);

const arr2 = [1, 2, 3];
arr.splice(1, 1);
console.log(arr);
console.log(arr.length);
