var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b0836ad4-a401-4c86-be8b-a9b430f0c78b","d063a5dc-c8c5-4074-be04-4ee3f8eb59bc","732e6160-a945-4e8a-a56d-92ebfba4104f","051934be-18f5-4b75-9d2e-b7423cda0d3e","6b94d88b-392d-4b57-8ef9-0d28fa6e3b7f"],"propsByKey":{"b0836ad4-a401-4c86-be8b-a9b430f0c78b":{"name":"sputnik_1","sourceUrl":null,"frameSize":{"x":50,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"KxdSxZhjv1ZxEghX72fMh6gApcFDdPa4","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":43},"rootRelativePath":"assets/b0836ad4-a401-4c86-be8b-a9b430f0c78b.png"},"d063a5dc-c8c5-4074-be04-4ee3f8eb59bc":{"name":"ship14_1","sourceUrl":null,"frameSize":{"x":50,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"YuOA.RtvWwEQgmNvFggXFXGPhuu0zd8O","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":48},"rootRelativePath":"assets/d063a5dc-c8c5-4074-be04-4ee3f8eb59bc.png"},"732e6160-a945-4e8a-a56d-92ebfba4104f":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"AlB55bmEEPj8lfnwVN4LcV7ddBykPVrC","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/732e6160-a945-4e8a-a56d-92ebfba4104f.png"},"051934be-18f5-4b75-9d2e-b7423cda0d3e":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"t0w4b5onG8pa.nBfQwmdR1rqnTUE2j.C","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/051934be-18f5-4b75-9d2e-b7423cda0d3e.png"},"6b94d88b-392d-4b57-8ef9-0d28fa6e3b7f":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"OB12_qH_AmGxGAr0iVT2YPAk0gt1Ykk1","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/6b94d88b-392d-4b57-8ef9-0d28fa6e3b7f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var spaceship = createSprite(200, 370, 20, 20);
var spacestation = createSprite(200, 5, 137, 15);
var stone1 = createSprite(10, 105, 15, 15);
var stone2 = createSprite(390, 175, 15, 15);
var stone3 = createSprite(10, 280, 15, 15);
var goal=0;
var death=0;

spaceship.setAnimation("ship14_1");
spacestation.setAnimation("sputnik_1");
stone1.setAnimation("animation_1");
stone2.setAnimation("animation_2");
stone3.setAnimation("animation_3");





function draw() {
background("black");

if (keyDown("up")) {
    spaceship.y=spaceship.y-5;
  }
  
if (keyDown("down")) {
    spaceship.y=spaceship.y+5;
  }
  
if (keyDown("right")) {
    spaceship.x=spaceship.x+5;
  }
  
if (keyDown("left")) {
    spaceship.x=spaceship.x-5;
  }  

if (keyDown("space")) {
 stone1.velocityX=20
 stone2.velocityX=-20
 stone3.velocityX=20
}




createEdgeSprites();
stone1.bounceOff(edges);
stone2.bounceOff(edges);
stone3.bounceOff(edges);
spaceship.bounceOff(edges);


if (spaceship.isTouching(stone1) || spaceship.isTouching(stone2) || spaceship.isTouching(stone3)) {
  playSound("assets/category_jump/arcade_game_jump_15.mp3");
  spaceship.x=200
  spaceship.y=370
  death = death+1
}

if(spaceship.isTouching(spacestation)){
  playSound("assets/category_accent/puzzle_game_accent_a_02.mp3")
  spaceship.x=200
  spaceship.y=370
  goal=goal+1
}

textSize(20)
  fill("lightblue")
  text("Goals:"+goal, 20, 15);
  

textSize(20)
  fill("lightblue")
  text("death:"+death, 320, 15);

if(death == 5){
  
  
  text("Game Over!!", 165, 160);
  stroke("red");
  stone1.velocity=0, 0
  stone2.velocity=0, 0
  stone3.velocity=0, 0
}

if(goal == 5){
  
  text("You Won!!", 165, 160);
  stroke("white");
  stone1.velocity=0, 0
  stone2.velocity=0, 0
  stone3.velocity=0, 0
 
  
  
  
  
}




drawSprites();
    
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
