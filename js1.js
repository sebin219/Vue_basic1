let arr = [10, 20, 30];
console.log(arr[0]);
console.log(arr[1]);

// let a1 = arr[0];
// let a2 = arr[1];
// 위 방식을 한번에 하는 것을 '배열 할당'이라고 함
let [a1, a2, a3] = arr;

let person = { name: '홍길동', age: 20 };
let { name: n, age: a } = person; //person이라는 객체 안에 name은 이제 n으로, age는 a로
console.log(name);
console.log(age);
