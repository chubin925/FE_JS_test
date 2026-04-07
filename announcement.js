// 오답정리
// 2. apple = fruits[1];

// 4.
// (1) 출력되지 않는다.
// 풀이: while문의 조건식이 거짓이라 아무것도 출력되지 않습니다. NaN은 숫자가 아님을 나타내고, 
// 숫자로 변환을 실패하거나 정의할 수 없는 계산식이나, 결과가 허수인 계산식, 유효하지 않은 값이 숫자로 표시되는 기타 경우에 나타납니다.
// (2) number : 9
// 풀이: do-while문은 일단 한 번 실행하고, 그 다음에 조건을 검사합니다.


//5. 
// textContent = count;
//풀이: textContent는 요소 안의 글자를 바꿀 때 사용합니다.


// 6. 
// const lion = () => {
// console.log("자바스크립트 마스터를 해보자!");
// };
// lion();
//풀이: function() 부분이 () => {}로 바뀐 것이다.


//8. 
// let userInput;

// do {
//   userInput = prompt("무엇을 말하고 싶나요?");
// } while (userInput != "끝");

//풀이: 프롬프트 메서드를 사용자가 끝이라고 입력할 때까지 반복해야 하기 때문에 반복문 안에 넣어야한다.


// 9.
// let userInput = Number(prompt("숫자를 입력하세요:"));
// let count = 1;
// let sum = 0;
// while (count <= userInput) {
//   sum += count;
//   count++;
// }
// alert("1부터" + userInput + "까지의 합은" + sum + "입니다.");

//풀이: prompt()로 값을 입력받고 Number()를 사용해 문자열을 숫자로 변환한다.
//count는 1부터 시작하여 더해질 숫자를 의미하고, sum은 합계를 저장하는 변수이다.
//while문은 count가 사용자가 입력한 숫자보다 작거나 같을 동안 반복된다. 
//반복문 안에서 sum += count를 통해 현재 숫자를 합계에 더하고, count++를 통해 다음 숫자로 1 증가시킨다.


// 10.
// 5
// ["old", 10, 233, true, "new"]
// 0
// arr = [ 10, 233, true, 'new' ]



// 11. appendChild
// 풀이: 부모 요소 안에 자식 요소를 맨 뒤에 추가하는 메서드


// $12.
// person.hobby = "drawing";
// person["hobby"] = "drawing";
// //풀이: 전자는 점 표기법이고 후자는 괄호 표기법이다

//13.
// function change() {
//   const name = document.getElementById("name");
//   let text = name.innerHTML;
//   let num = parseInt(text.split("_")[1]);
//   num++;
//   name.innerHTML = "likelion_" + num;
// }

//풀이: span의 글자를 가져와서 likelion_1을 _ 기준으로 나눠서 숫자 1을 꺼내고 1을 2로 증가시킨 뒤
// 다시 likelion_2처럼 붙여서 넣으면 된다

// 14. (2)  
// onclick



// 1. 2
// 2. console.log(fruits[1]);
// 3. 짝수입니다.

// 7.
// let answer = 0;
// const isLogin = true;
// answer = isLogin ? "환영합니다" : "접근 권한이 없습니다.";
// consosle.log(answer)

//14.(1)
//document.getElementById
//addEventListener

