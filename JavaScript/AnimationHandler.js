var tID;
let position = 0;
let animationFrames = 0;

function IdleAnimation(){
    let idleSpriteHolder = document.getElementById('IdleAnimController');
    var position = 0;
    idleSpriteHolder.hidden = false;
    tID = setInterval(() => {
        document.getElementById('IdleAnimController').style.backgroundPosition = `-${position}px 0px`;
        
        if(position < 280){
            position = position + 70;
        }else{
            position = 0;
        }
    }, 150);
}

function BeginWeakAttack(){
    RunAnimation();
}

function RunAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('RunAnimController').style.visibility = 'visible';
    document.getElementById('IdleAnimController').style.visibility = 'hidden';

    document.getElementById('RunAnimController').animate([
        {transform: 'translateX(270px)'}
    ],
        {
            duration: 700,
            iterations: 1
        }
    )
    runID = setInterval(() => {
        document.getElementById('RunAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  450){
            position = position + 68;
            animationFrames++;
          }else{
            position = 0;
          }

        if(animationFrames == 6){
            clearInterval(runID);
            document.getElementById('RunAnimController').style.visibility = 'hidden';
            WeakAttackAnimation();
        }
    }, 100);
}

function WeakAttackAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('WeakAttackAnimController').style.visibility = 'visible';

    weakAttackID = setInterval(() => {
        document.getElementById('WeakAttackAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  250){
            position = position + 95;
            animationFrames++;
          }else{
            position = 0;
          }

        if(animationFrames == 4){
            clearInterval(weakAttackID);
            document.getElementById('WeakAttackAnimController').style.visibility = 'hidden';
            JumpBackAnimation();
        }
    }, 80);
}

function JumpBackAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('JumpBackAnimController').style.visibility = 'visible';

    jumpBackID = setInterval(() => {
        document.getElementById('JumpBackAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  460){
            position = position + 68;
            animationFrames++;
          }else{
            position = -20;
          } 
          JumpBackAnimationMovement();
        if(animationFrames == 7){
            clearInterval(jumpBackID);
            document.getElementById('JumpBackAnimController').style.visibility = 'hidden';
            document.getElementById('IdleAnimController').style.visibility = 'visible';
        }
    }, 100);
}

function JumpBackAnimationMovement(){
    document.getElementById('JumpBackAnimController').animate([
        {transform: 'translateX(-230px)'}
    ],
        {
            duration: 500,
            iterations: 1
        }
    )
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

function BeginMageAttack(){
    MageRunAnimation();
}

function MageRunAnimation(){
    let position = 0;
    document.getElementById('MageIdleAnimController').style.visibility = 'hidden';
    document.getElementById('MageRunAnimController').style.visibility = 'visible';
    document.getElementById('MageRunAnimController').animate([
        {transform: 'translateX(-270px)'}
    ],
        {
            duration: 1200,
            iterations: 1
        }
    );
    mageRunID = setInterval(() => {
        document.getElementById('MageRunAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position < 1500){
            position = position + 224;
        }else{
            position = 0;
        }
    }, 100);  
}

function MageAttackAnimation(){
    
}

function StopMageAttack(){
    clearInterval(mageRunID);
    document.getElementById('MageRunAnimController').style.visibility = 'hidden';
    document.getElementById('MageIdleAnimController').style.visibility = 'visible';
}

function AnimationStart(){
    IdleAnimation();
    BeginMageIdle();
}




       


