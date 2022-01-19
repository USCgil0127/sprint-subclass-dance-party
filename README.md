## Subclass Dance Party

![](https://images.velog.io/images/gil0127/post/d2e485d9-4072-464b-8d86-6591b23d4d9d/1.gif)
위 그림에서 댄서(빨간 점)가 춤을 추고 있는게 보이시나요? (저게 춤추고 있는 게 맞냐구요? 네, 받아들이세요)

이 Sprint를 통해 객체 지향 프로그래밍의 다형성(polymorphism)의 특징을 코드로 직접 구현할 수 있습니다. DOM과 CSS를 연습할 수 있는 좋은 기회이기도 하고요! 여러분이 작성하고 있는 어떤 부분이 다형성에 해당하는지 살펴보세요.

## Getting Started
- `dancefloor.html` 는 댄서들이 활동할 무대입니다.
- `src/functional` 안쪽에 있는 `dancer.js`, `blinkyDancer.js` 등의 코드는, 이미 클로저를 이용한 functional pattern으로 작성된 코드입니다. 이제 이 코드를 이용해서 ES5 (pseudoclassical) 및 ES6 class 방법으로 리팩토링을 해야 합니다.
- `spec`에는 테스트 파일들이 포함되어 있습니다.
- `npm test`를 이용해 테스트할 수 있습니다.
- `dancefloor.html`, `src/functional/init.js`, `src/functional/dancer.js`, `src/functional/blinkyDancer.js` 와 같은 파일들이 어떻게 연관되어 있는지 확인해보세요.
- 스타일 파일 `styles.css`도 확인해보세요. 댄서(빨간 점)이 어떻게 둥글게 그려지는지도 알 수 있습니다.

## Bare minimum requirements

> Bare minimum 요구사항을 모두 완료하신 후 advanced로 넘어가세요. 이번 스프린트에서는 상당한 자유도를 가지고 자신만의 결과물을 만들게 됩니다. 프로젝트를 시작하기 전에 주어진 요구사항을 정확히 파악하시고, 페어와 충분한 논의를 통해 전체적인 계획을 세우고 시작하세요.

- 이미 Functional style로 작성되어 있는 Dancer와 BlinkyDancer를 ES5(pseudoclassical) 과 ES6 class 로 각각 리팩토링 하세요.
- 적어도 두 종류의 새로운 dancer를 작성하세요.
  - 작성하신 새로운 dancer 파일을 dancefloor.html에 추가 하세요.
- 작성한 댄서를 CSS와 JS를 이용하여 멋지게 꾸며보세요. (CSS를 결코 가볍게 여기지 말고, 여기서 충분히 연습해보시길 바랍니다. 실제로 CSS 문법은 프론트엔드 개발자들의 면접 질문으로 늘 등장하는 주제입니다.) 다음 중 하나라도 반드시 적용해보세요.
  - 색을 변경해보세요
  - 페이지 안에서 돌아다니게 만들어보세요
  - 사이즈가 커졌다 작아졌다 하도록 만들어보세요
  - 동그란 모양 말고 다른 모양도 그려보세요
  - 회전하도록 만들어보세요
  - 이미지를 사용해보세요 ( 태그 또는 CSS background-image 속성)
- 다음 API 문서를 참고해 그대로 구현하세요.

![](https://images.velog.io/images/gil0127/post/49e05b0e-48d2-469f-934a-19278728098c/1.PNG)

![](https://images.velog.io/images/gil0127/post/0c6aadd0-b06e-4d22-9bfa-49c4579a10bb/2.PNG)

### init.js
- dancer.js 파일의 makeDancer 함수를 통해서 댄서 인스턴스들을 생성하셨을텐데요. 자, init.js에 전역 배열(dancers)이 하나 있습니다. 여기에 댄서 인스턴스들을 추가하면, 배열의 반복을 통해 댄서 전부를 한번에 관리할 수 있습니다.
 - init.js의 전역 변수(dancers)에 댄서 인스턴스들을 넣으셨나요? dancer.js 파일에서 작성한 render 메소드와 lineUp 메소드를 활용해보세요.
 > 꼭 지켜주셔야 할 것은 버튼을 클릭했을 때 이벤트 핸들러(onclick, addEventListener)에 DOM 조작 코드를 작성하면 안된다는 것입니다.
이 스프린트를 통해 상속과 다형성을 연습한다는 사실을 잊지 마세요!

## Advanced Challenges
리팩토링을 끝내셨나요? 훌륭합니다. 더 많은 도전 과제가 있습니다. 다음 문제를 해결하면서 ES6 기능들을 자유롭게 활용해보세요!

- 서로 다른 댄서가 상호작용할 수 있도록 구현하세요.
   - 예를 들어 dancers 전역 배열을 반복문과 피타고라스 정리를 활용하여 서로 간의 거리를 계산하면, 댄서가 n개의 가장 가까운 이웃을 찾고 위치에 따라 무언가를 수행하도록 할 수 있습니다.
- 댄서에 키보드 이벤트를 추가해보세요. (화살표 키 혹은 WASD 키에 따라 움직이게 만들 수 있지 않을까요?)
- 최소 두가지의 다른 CSS3 transition을 적용해서 댄서들이 멋진 효과를 갖게 구현해보세요.
- 댄서에서 상속받은 속성으로 새로운 무대를 만들어보세요.
- lineUp으로 정렬된 댄서들을 다시 흩뜨려 놓아 보세요.
- 좌표를 활용해서 바닥을 걸어 가는 댄서를 하나 이상 구현해보세요.
- HTML5 태그를 활용해서 신나는 음악을 구현해보세요.
- 유저가 목록을 통해 댄서가 춤을 어떻게 출지 선택하거나, 유저의 이미지를 업로드해서 새로운 댄서를 생성할 수 있게 구현해보세요.
- [Particle system](https://en.wikipedia.org/wiki/Particle_system) 을 구현해보세요.

----------

# 완성 Sprint 시연 영상
![](https://images.velog.io/images/gil0127/post/4019ec3a-0e30-463a-b82d-4199c6ad3409/outcome.gif)

- 생성되는 점들의 색깔을 무작위로 선택되도록 했다. 또한, 생성되는 위치 역시 무작위로 생성된다.

- `lineUp` 클릭시, 모든 점들이 한 곳에 모인다.

- `clear` 클릭시, 모든 점들이 사라진다.

# 좀 더 구현해보고 싶은 점

- 점들의 모양도 랜덤하게 바꿔볼 수 있도록 구현해보고 싶다.

- 키보드를 통해 점들이 움직이도록 구현해보고 싶다.

- 점들이 `Dance Time` 클릭시, 일정한 패턴으로 움직이는 것을 구현해보고 싶다.

# Sprint 진행 후, 느낀 점

구현해보고 싶은 것들이 더 많은데, 해당 Sprint만 붙잡고 있을 수 없어서 일단은 마무리 지었다.

나중에 시간적 여유가 된다면, 더 많은 기능들을 업데이트 해봐야겠다.
