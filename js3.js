// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let posts = [];
async function getPosts() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);

    let posts = await response.json();
    console.log(posts);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('끝');
  }
}
getPosts();
//promise는 3가지의 상태를 갖고 있음. pending하는중, , reject거절됨
//fetch는 비동기함수

//비동기함수가 있으면 await을 쓰는데, 함수 앞에 async를 달아줘야 함
