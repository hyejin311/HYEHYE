//초기 변수값
let num = 0;

//목적
let targetX= 0;

 //카운트
let count = 0;

 //이미지 전환시간의 간격
let action = 200;

 //li 의 가로크기
let sWidth = 600;

 //li의 숫자
let sNum = 5;

//진행 시 논리 값
let go = true;

//기본 셋업하기 onload -> 이벤트
window.addEventListener('DOMContentLoaded',function(){
  //1. 복제
const temp = document.querySelector('.box').cloneNode(true);
document.querySelector('#gall').append(temp);

 //2. 스타일 정리
document.querySelector('.box').style.width = sWidth * sNum + 'px';
document.querySelector('#gall').style.width = (sWidth * sNum)*2 + 'px';

//3. 타이머 작동
setInterval(motion,10);

//4. 이벤트 만들기
//li-> mouseout, mouseover
const btn = document.querySelectorAll('.box>li');
btn.forEach(function(btn){
btn.addEventListener('mouseover',function(e){
go = false;
});
});

btn.forEach(function(btn){
btn.addEventListener('mouseout',function(e){
go = true;
});
});

const Prev = document.querySelector('#prev');
const Next = document.querySelector('#next');

//prev
Prev.addEventListener('click',prev);
//next
Next.addEventListener('click',next);

//circle
const citM =document.querySelectorAll('.nav>li');
citM.forEach(function(cirm){
cirm.addEventListener('click',function(e){
const data = cirm.getAttribute('data-num');
console.log(data);
cir = data;
circle();
targetX = -sWidth *(data-1);
});
});
  //.g+ i
});

//기본 움직임 제어 -> 카운터
function motion(){
if(go){
++count;
document.querySelector('#info').innerHTML = count;
if(count == action){
count = 0;
prev();
}
}
num += 0.1 * (targetX - num);
document.querySelector('#gall').style.left = num + 'px';
}

//circle기본
let cir = 1;
function circle(){
for(let i =1; i <= sNum; i++){
document.querySelector('.g' + i).style.backgroundColor = 'blue';
}
document.querySelector('.g'+ cir).style.backgroundColor = 'red';
}

//prev방향
function prev(){
targetX += 600;
if(targetX> 0){
num = -sWidth * sNum;
targetX = -sWidth * (sNum - 1);
}
cir --;
if(cir < 1){cir = sNum;}
circle();
}

//next방향
function next(){

// 기본 움직임
targetX -= 600;

//조건//
if(targetX < -sWidth * (sNUM*2 -1)){

// targetX = -sWidth *(sNum-1)
num = - sWidth * (sNum-1);
targetX = -sWidth * sNum;
}
cir ++;
if(cir > sNum){cir = 1;}
circle();
}