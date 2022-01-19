if (typeof window === 'undefined') {
    global.DancerClass = require('./DancerClass');
  } 

  class NewDancerClass extends DancerClass {

    

    step(){
      super.step();
      let style = this.$node.style;
      style.display = style.display === 'none' ? 'inline-block' : 'none';
    }

  }


  if (typeof window === 'undefined') {
    module.exports = NewDancerClass;
  }