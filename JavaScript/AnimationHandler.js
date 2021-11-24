var tID;
let runAnimPath= '../Assets/Pictures/Sprites/Player/Run.png';
let blackImagePath = '../Assets/Pictures/Backgrounds/BlackAegisBG.jpg';
let idleSprite = document.getElementById('IdleAnimController');
let animationInMotion = false;

const ANIMATION_FRAME_DIFFERENCE = 69;

function IdleAnimation(){
    let idleSpriteHolder = document.getElementById('IdleAnimController');
    var position = 0;
    const frameDistance = 69; //How far Each Sprite Frame is from the Last in Pixels
    idleSpriteHolder.hidden = false;
    animationInMotion = false;
    tID = setInterval(() => {
        document.getElementById('IdleAnimController').style.backgroundPosition = `-${position}px 0px`;
        
        if(position < 345){
            position = position + frameDistance;
        }else{
            position = 0;
        }
    }, 150);
}



function AttackAnimation(){
    let runSpriteHolder = document.getElementById('RunAnimController');
    let attackSprite = document.getElementById('AttackAnimController');
    attackSprite.hidden = false;
    attackSprite.style.transform = 'translateX(200px)';
    runSpriteHolder.hidden = true;
    var position = 0;
    let animationFrames = 0;
    const frameDistance = 67;
    attackAnimID = setInterval(() => {
        document.getElementById('AttackAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  345){
            position = position + frameDistance;
            animationFrames++;
          }else{
            position = 0;
          }
        if(animationFrames == 10){
            clearInterval(attackAnimID);
            PlayerJumpBackAnimation();
            attackSprite.style.transform = 'translateX(-200px)';
        }
    }, 40);
}

function BeginPlayerAttack(){
   var position = 0;
   var animID;
   var framesRun = 0;
   let idleSpriteHolder = document.getElementById('IdleAnimController');
   let runSpriteHolder = document.getElementById('RunAnimController');
   idleSpriteHolder.hidden = true;
   runSpriteHolder.hidden = false;

   document.getElementById('RunAnimController').animate([
            {transform: 'translateX(600px)'}
        ], {
            duration: 4000,
            iterations: 1
        });

    animID = setInterval(() => {
        document.getElementById('RunAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  345){
            position = position + 69;
            framesRun++;
            }else{
            position = 0;
            }
        if(framesRun == 15){
                clearInterval(animID);
                document.getElementById('RunAnimController').style.transform = 'translateX(-10px)';
                AttackAnimation();
            }
        }, 75);
}

function PlayerJumpBackAnimation(){
     let attackSpriteHolder = document.getElementById('AttackAnimController');
     let playerJumpBackHolder = document.getElementById('JumpBackController');
     let idleSpriteHolder = document.getElementById('IdleAnimController');
     let position = 0;
     let animationFrames = 0;
     const frameDistance = 57;
     playerJumpBackHolder.style.transform = 'translateX(200px)';
     playerJumpBackHolder.hidden = false;
     attackSpriteHolder.hidden = true;
    jumpBackID = setInterval(() => {
          document.getElementById('JumpBackController').animate([
            {transform: 'translateX(-25px)'}
        ], {
            duration: 1000,
            iterations: 1
        });
        document.getElementById('JumpBackController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  100){
            position = position + frameDistance;
            animationFrames++;
          }else{
            position = 0;
          }

        if(animationFrames == 5){
            clearInterval(jumpBackID);
            playerJumpBackHolder.hidden = true;
            idleSpriteHolder.hidden = false;
            //IdleAnimation();
        }
    }, 100);

}

// function PlayerAttackMovementAnimation(){
//     var step = 1;
//     var xPosition = document.getElementById('runAnimController').offsetLeft;
//     if(x < 500){
//         xPosition = xPosition + step;
//         document.getElementById('runAnimController').style.left = xPosition + 'px';
//     }
// }

// function PlayerAttackMovementTimer(){
//     PlayerAttackMovementAnimation();
//     my_time = setTimeout('PlayerAttackMovementTimer', 10);
// }

function AnimationStart(){
    //let runSprite = document.getElementById('RunAnimController');
    //runSprite.hidden = true;
    let jumpBackHolder = document.getElementById('JumpBackController');
    let runSpriteHolder = document.getElementById('RunAnimController');
    let attackSpriteHolder = document.getElementById('AttackAnimController');
    runSpriteHolder.hidden = true;
    attackSpriteHolder.hidden = true;
    jumpBackHolder.hidden = true;
    //jumpBackHolder.hidden = true;
    IdleAnimation();
    //PlayerAttack();
}




       


