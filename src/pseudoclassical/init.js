/* eslint-disable */
const dancers = [];

// let BlinkyDancer;
// 애를 선언해주면 안 되는 것같고...

function handleClickDancerButton () {
  /* makeBlinkyDancer is the dancer maker functions available in global scope.
  * A new object of the given type will be created and added
  * to the stage.
  */
  // make a dancer with a random position
  // makeBlinkyDancer => new BlinkyDancer
  let dancer = new BlinkyDancer(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );
  //document.body.appendChild(dancer.$node);

  
  dancers.push(dancer);
  dancer.render();

}

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);


  // window.addEventListener 안에 넣어줬다.
  // class 방식이 아니라 다른 방식으로 어떻게 바꿔줘야 하는가??
  const NewLineup = document.querySelector('.lineUpButton')
  NewLineup.onclick = () => {
    dancers.forEach(dancer => {
      dancer.lineUp()
    })
  }

});

