// const DancerClass = require('./DancerClass');

/* global DancerClass */
if (typeof window === 'undefined') {
  global.DancerClass = require('./DancerClass');
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 class 키워드를 써서 ES6 방식으로 리팩토링하세요
// 여기에는 Pseudoclassical에서 정의된 BlinkyDancer와 이름이 겹치므로, BlinkyDancerClass라는 이름을 사용합니다.
class BlinkyDancerClass extends DancerClass {
  // your code here
  ///////////////////////////////////
  // constructor(){
  //   // 부모의 인자들을 다 받아와서
  // super();
  // }
  ////////////////////////////////////

  ////// step 이라는 함수 안에
  step(){
    super.step();
    /// 부모의 step을 받아와서 나머지는 덮어씌워주거나 추가한다.
    let style = this.$node.style;
    style.display = style.display === 'none' ? 'inline-block' : 'none';

  }
  ////// setposition이랑 뭔 관계??

}


// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
  module.exports = BlinkyDancerClass;
}
