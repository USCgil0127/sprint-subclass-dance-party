if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.


// 클래스와 별로도 Dom을 위한 작업이기 때문에 

// Dancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
  function Dancer ( top, left, timeBetweenSteps ) {

    // dancer.js 에서 Dom을 구동하기 위해 가져옴
  const createDancerElement = () => {
  let elDancer = document.createElement('span');
  elDancer.className = 'dancer';
  return elDancer;
 }; // 은닉화... 컨스트렉트 안에 있으면 못 본다.
    this.$node = createDancerElement();
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition( top, left );
   // this.step() = step();
   // this.setPosition( top, left ) = setPosition( top, left );
  }

Dancer.prototype.step = function () {

   setTimeout(this.step.bind(this), this.timeBetweenSteps);
   // 왜 this.step()?? <=> this.step.bind(this)?? why??
  // but why we have to add ( this )??
}

////////// 프로토타입 함수를 한 번만 선언해줘서 언제든지 쓸 수있게 해준다.
Dancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  Object.assign(this.$node.style, {
    // dance.$node.style => this.$node.style 로 바꿔줌
    top: `${top}px`,
    left: `${left}px`
  });
};
////// Dom 을 위한 작업으로 필요한 부분이지만 Dancer.js 에 맞게 바꿔줘야 한다.

// 내가 render 함수를 만들었음
  Dancer.prototype.render = function ( ){
    document.body.append(this.$node);
 }

 Dancer.prototype.lineUp = function() {
  this.$node.style.top = '500px';
  this.$node.style.left = '0px';
}

// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = Dancer;
}
