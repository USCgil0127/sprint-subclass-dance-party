if (typeof window === 'undefined') {
  var jsdom = require('jsdom');
  var { JSDOM } = jsdom;
  var { document } = (new JSDOM('')).window;
} // you don't have to worry about this code. this is for testing.

// dancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 Dancer와 이름이 겹치므로, DancerClass라는 이름을 사용합니다.
class DancerClass {
  // your code here
  constructor( top, left, timeBetweenSteps ){

    const createDancerElement = () => {
      let elDancer = document.createElement('span');
      elDancer.className = 'dancer';
      
      return elDancer;
    };  

    this.$node = createDancerElement();
    this.timeBetweenSteps = timeBetweenSteps;

    this.setPosition( top, left );
    this.step();

  } // end of constructor

   step() {
  //   setTimeout(this.step, this.timeBetweenSteps);   
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
    // call은 안되고, bind(this)
 }
 
 ////////// 프로토타입 함수를 한 번만 선언해줘서 언제든지 쓸 수있게 해준다.
 setPosition(top, left) {
  
  Object.assign(this.$node.style, {
     top: `${top}px`,
     left: `${left}px`
   })
  
 }

// 내가 render 함수를 만들어줌
render(){
  document.body.appendChild(this.$node);
  //target.append(this.$node);
}
// 내가 임의로 만들어준 lineup 함수
lineUp(){
  this.$node.style.top = '500px';
  this.$node.style.left = '0px';
}

 clear(){
  this.$node.remove();
 }

} // end of class

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = DancerClass;
}
