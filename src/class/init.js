/* eslint-disable */
const dancers = [];
const dancers2 = [];

function handleClickDancerButton () {
  
    let dancer = new BlinkyDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );

  let dancer2 = new NewDancerClass(
    document.body.clientHeight * Math.random(),
    document.body.clientWidth * Math.random(),
    Math.random() * 1000
  );


  dancers.push(dancer);
  dancer.render();

  dancers2.push(dancer2);

  for(let i=0; i< dancers2.length; i++ ){
    dancer2.$node.classList.remove('dancer');
    // dancer2 와 dancer 가 하나로 더해지는 것을 막기 위해
    dancer2.$node.classList.add('dancer2');
  }

  dancer2.render();

}



window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);

  console.log(  )
});

  // window.addEventListener 안에 넣어줬다.
  const NewLineup = document.querySelector('.lineUpButton')
  NewLineup.onclick = () => {
    dancers.forEach(dancer => {
      dancer.lineUp()
    })

    dancers2.forEach(dancer2 => {
      dancer2.lineUp()
    })

  }


  // window.addEventListener 안에 clear 버튼을 넣어줬다.
  const Clear = document.querySelector('.clearButton')
  Clear.onclick = () => {
    
    dancers.forEach(dancer => {
      dancer.clear()
    })

    dancers2.forEach(dancer2 => {
      dancer2.clear()
    })

  }





