var tID;
let runAnimPath= '../Assets/Pictures/Sprites/Player/Run.png';
let blackImagePath = '../Assets/Pictures/Backgrounds/BlackAegisBG.jpg';
let idleSprite = document.getElementById('IdleAnimController');

const ANIMATION_FRAME_DIFFERENCE = 69;

function IdleAnimation(){
    let idleSpriteHolder = document.getElementById('IdleAnimController');
    var position = 0;
    const frameDistance = 69; //How far Each Sprite Frame is from the Last in Pixels
    idleSpriteHolder.hidden = false;
    tID = setInterval(() => {
        document.getElementById('IdleAnimController').style.backgroundPosition = `-${position}px 0px`;
        
        if(position < 345){
            position = position + frameDistance;
        }else{
            position = 0;
        }
    }, 150);
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
            {transform: 'translateX(325px)'}
        ], {
            duration: 2000,
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

function BeginPlayerDefend(){
    PlayerDefendSphereAnimation();
}

function PlayerDefendSphereAnimation(){
    var position = 0;
    let animationFrames = 0;
    document.getElementById('DefendAnimController').style.visibility = 'visible';
    defendSphereID = setInterval(() => {
        document.getElementById('DefendAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  2600){
            position = position + 130;
            animationFrames++;
          }else{
            position = 0;
          }
       //TODO: REMOVE THIS AFTER TESTING (animationFrames && Code Below)
       if(animationFrames == 40){
            clearInterval(defendSphereID);
            document.getElementById('DefendAnimController').style.visibility = 'hidden';
        }
       
    }, 35);
}

function DisableDefendSphereAnimation(){
    clearInterval(defendSphereID);
    document.getElementById('DefendAnimController').style.visibility = 'hidden';
}

function BeginPlayerHeal(){
    PlayerHealAnimation();
}

function PlayerHealAnimation(){
    var position = 0;
    let animationFrames = 0;
    document.getElementById('HealAnimController').style.visibility = 'visible';
    healSphereID = setInterval(() => {
        if(position < 4700){
            document.getElementById('HealAnimController').style.backgroundPosition = `-${position}px 0px`;
            position = position + 192;
            animationFrames++;
        }else{
            position = 10;
        }

        if(animationFrames == 25){
            clearInterval(healSphereID);
            document.getElementById('HealAnimController').style.visibility = 'hidden';
        }
    }, 50);
}

function BeginPlayerCharge(){
    PlayerChargeAnimation();
}

function PlayerChargeAnimation(){
    var position = 0;
    let animationFrames = 0;
    document.getElementById('ChargeAnimController').style.visibility = 'visible';
    chargeSphereID = setInterval(() => {
        if(position < 4780){
            document.getElementById('ChargeAnimController').style.backgroundPosition = `-${position}px 0px`;
            position = position + 192;
            animationFrames++;
        }else{
            position = 0;
        }

        if(animationFrames == 25){
            clearInterval(chargeSphereID);
            document.getElementById('ChargeAnimController').style.visibility = 'hidden';
        }
    }, 30);
}

function BeginSpecialAttack(){
    SpecialAttackAnimation();
}

function SpecialAttackAnimation(){
    var position = 0;
    let animationFrames = 0;
    document.getElementById('IdleAnimController').style.visibility = 'hidden';
    document.getElementById('SpecialAttackAnimController').style.visibility = 'visible';
    specialAttackSphereID = setInterval(() => {
        if(position < 740){
            document.getElementById('SpecialAttackAnimController').style.backgroundPosition = `-${position}px 0px`;
            position = position + 68;
            animationFrames++;
        }else{
            position = 0;
        }

        if(animationFrames == 13){
            clearInterval(specialAttackSphereID);
            document.getElementById('SpecialAttackAnimController').style.visibility = 'hidden';
            document.getElementById('IdleAnimController').style.visibility = 'visible';
        }

    },60);
}

function BeginMageIdle(){
    MageIdleAnimation();
}

function MageIdleAnimation(){
    let position = 0;
    mageIdleID = setInterval(() => {
        document.getElementById('MageIdleAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position < 1500){
            position = position + 224;
        }else{
            position = 0;
        }
    }, 100);
}

function AnimationStart(){
    let jumpBackHolder = document.getElementById('JumpBackController');
    let runSpriteHolder = document.getElementById('RunAnimController');
    let attackSpriteHolder = document.getElementById('AttackAnimController');
    runSpriteHolder.hidden = true;
    attackSpriteHolder.hidden = true;
    jumpBackHolder.hidden = true;
    IdleAnimation();
    BeginMageIdle();
}




       


