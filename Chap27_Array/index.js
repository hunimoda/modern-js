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

//// 예제 27-39
//const arr = [1, 2, 3];
//
//delete arr[1];
//console.log(arr);
//console.log(arr.length);
//
//const arr2 = [1, 2, 3];
//arr.splice(1, 1);
//console.log(arr);
//console.log(arr.length);

//// 예제 27-41
//const arr = [1];
//
//arr.push(2);
//console.log(arr);
//
//const result = arr.concat(3);
//console.log(result);
//console.log(arr);

//// 예제 27-42
//console.log(Array.isArray([]));
//console.log(Array.isArray([1, 2]));
//console.log(Array.isArray(new Array()));
//
//console.log(Array.isArray());
//console.log(Array.isArray({}));
//console.log(Array.isArray(null));
//console.log(Array.isArray(undefined));
//console.log(Array.isArray(1));
//console.log(Array.isArray("Array"));
//console.log(Array.isArray(true));
//console.log(Array.isArray(false));
//console.log(Array.isArray({ 0: 1, length: 1 }));

//// 예제 27-43
//const arr = [1, 2, 2, 3];
//
//console.log(arr.indexOf(2));
//console.log(arr.indexOf(4));
//console.log(arr.indexOf(2, 2));
//
//const foods = ["apple", "banana", "orange"];
//
//if (foods.indexOf("orange") === -1) {
//	foods.push("orange");
//}
//
//console.log(foods);
//
//if (!foods.includes("orange")) {
//	foods.push("orange");
//}
//
//console.log(foods);

//// 예제 27-46
//const arr = [1, 2];
//let result = arr.push(3, 4);
//
//console.log(result);
//console.log(arr);

//// 예제 27-47
//const arr = [1, 2];
//
//arr[arr.length] = 3;
//console.log(arr);

//// 예제 27-48
//const arr = [1, 2];
//const newArr = [...arr, 3];

//console.log(arr);
//console.log(newArr);

//// 예제 27-49
//const arr = [1, 2];
//let result = arr.pop();
//
//console.log(result);
//console.log(arr);

// 예제 27-50
//const Stack = (function () {
//	function Stack(array = []) {
//		if (!Array.isArray(array)) {
//			throw new TypeError(`${array} is not an array.`);
//		}
//		this.array = array;
//	}
//
//	Stack.prototype = {
//		constructor: Stack,
//		push(value) {
//			this.array.push(value);
//		},
//		pop() {
//			return this.array.pop();
//		},
//		entries() {
//			return [...this.array];
//		},
//	};
//
//	return Stack;
//})();
//
//const stack = new Stack([1, 2]);
//console.log(stack.entries());
//
//stack.push(3);
//console.log(stack.entries());
//
//stack.pop();
//console.log(stack.entries());

// 예제 27-51
class Stack {
	constructor(array) {
		if (!Array.isArray(array)) {
			throw new Error(`${array} is not an array.`);
		}
		this.array = array;
	}

	push(value) {
		this.array.push(value);
	}

	pop() {
		return this.array.pop();
	}

	entries() {
		return [...this.array];
	}
}

const stack = new Stack([1, 2, 3]);
console.log(stack.entries());

stack.push(4);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());
