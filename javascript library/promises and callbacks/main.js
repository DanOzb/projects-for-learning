const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];

  const reverseAliceTumbling = [
    { transform: 'rotate(360deg) scale(0)'},
    { transform: 'rotate(0) scale(1)'}
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");



//Callback hell 
function tumbleAlice(){

  const animateObject = alice1.animate(aliceTumbling, aliceTiming);

  setTimeout(() => {
    const animateObject2 = alice2.animate(aliceTumbling, aliceTiming);

    setTimeout(()=> {
      const animateObject3 = alice3.animate(aliceTumbling, aliceTiming);

    }, aliceTiming.duration);
  }, aliceTiming.duration);
};


//.then hell version
function tumbleAliceThen(){
  const animateObject = alice1.animate(aliceTumbling, aliceTiming);
  const promise1 = Promise.resolve(animateObject.finished);

  promise1.then(() =>{
    const animateObject2 = alice2.animate(aliceTumbling, aliceTiming);
    const promise2 = Promise.resolve(animateObject2.finished);

      promise2.then(() =>{
        alice3.animate(aliceTumbling, aliceTiming);
      })
  })
}

//promise version

function tumbleAliceProm(){
  alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => {
      alice2.animate(aliceTumbling, aliceTiming).finished
        .then(() => {
          alice3.animate(aliceTumbling, aliceTiming);
      });
    });
};

//async version + reversed + infinite loop

async function tumbleAliceAsync(){
  const animateObject = alice1.animate(aliceTumbling, aliceTiming);
  await animateObject.finished;
  const animateObject2 = alice2.animate(aliceTumbling, aliceTiming);
  await animateObject2.finished;
  const animateObject3 = alice3.animate(aliceTumbling, aliceTiming);
  await animateObject3.finished;
  const reverseObject = alice3.animate(reverseAliceTumbling, aliceTiming);
  await reverseObject.finished;
  const reverseObject2 = alice2.animate(reverseAliceTumbling, aliceTiming);
  await reverseObject2.finished;
  const reverseObject3 = alice1.animate(reverseAliceTumbling, aliceTiming);
  await reverseObject3.finished;
  tumbleAliceAsync();
}



