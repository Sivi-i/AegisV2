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
    position = -5;
    animationFrames = 0;
    document.getElementById('JumpBackAnimController').style.visibility = 'visible';

    jumpBackID = setInterval(() => {
        document.getElementById('JumpBackAnimController').style.backgroundPosition = `-${position}px 0px`;
        JumpBackAnimationMovement();
        if(position <  460){
            position = position + 68;
            animationFrames++;
          }else{
            position = -5;
          } 
          
        if(animationFrames == 6){
            clearInterval(jumpBackID);
            document.getElementById('JumpBackAnimController').style.visibility = 'hidden';
            document.getElementById('IdleAnimController').style.visibility = 'visible';
        }
        
    }, 70);
}

function JumpBackAnimationMovement(){
    document.getElementById('JumpBackAnimController').animate([
        {transform: 'translateX(-230px)'},
        
        
    ],
        {
            duration: 450,
            iterations: 1
        }
    )
}

function BeginMediumAttack(){
    MediumAttackStartAnimation();
}

function MediumAttackStartAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('IdleAnimController').style.visibility = 'hidden';
    document.getElementById('MediumAttackStartAnimController').style.visibility = 'visible';

    mediumAttackID = setInterval(() => {
        document.getElementById('MediumAttackStartAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position < 331){ 
            position = position + 65;
            animationFrames++;
          }else{
            position = 0;
          }

          if(animationFrames == 5){
            clearInterval(mediumAttackID);
            MediumAttackChargeUpAnimation();
            document.getElementById('MediumAttackStartAnimController').style.visibility = 'hidden';
          }
    }, 100);
}

function MediumAttackChargeUpAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('MediumAttackChargeUpAnimController').style.visibility = 'visible';
    document.getElementById('IdleAnimController').style.visibility = 'hidden';

    mediumAttackChargeUpID = setInterval(() => {
        document.getElementById('MediumAttackChargeUpAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position < 278){
            position = position + 68;
            animationFrames++;
          }else{
            position = 0;
          }

          if(animationFrames == 4){
            clearInterval(mediumAttackChargeUpID);
            MediumAttackRushAnimation();
            document.getElementById('MediumAttackChargeUpAnimController').style.visibility = 'hidden';
          }
    }, 100);
}

function MediumAttackRushAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('MediumAttackRushAnimController').style.visibility = 'visible';
    document.getElementById('IdleAnimController').style.visibility = 'hidden';
    MediumAttackRushMovement();
    mediumAttackChargeUpID = setInterval(() => {
        document.getElementById('MediumAttackRushAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  137){
            position = position + 139.7;
            animationFrames++;
          }else{
            position = 0;
          }

          if(animationFrames == 3){
              clearInterval(mediumAttackChargeUpID);
              document.getElementById('MediumAttackRushAnimController').style.visibility = 'hidden';
              MediumAttackLandingAnimation();
          }

    }, 100);
}

function MediumAttackRushMovement(){
    document.getElementById('MediumAttackRushAnimController').animate([
        {transform: 'translateX(425px)'}
    ],
        {
            duration: 500,
            iterations: 1
        }
    )
}

function MediumAttackLandingAnimation(){ 
    position = 0;
    animationFrames = 0;
    document.getElementById('MediumAttackReturnAnimController').style.visibility = 'visible';

    mediumAttackEndingID = setInterval(() => {
        document.getElementById('MediumAttackReturnAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  140){
            position = position + 70;
            animationFrames++;
          }else{
            position = 0;
          }
        
          if(animationFrames == 3){
            clearInterval(mediumAttackEndingID);
            MediumAttackTeleportAnimation();
          }
    }, 100);
}

function MediumAttackTeleportAnimation(){
    let delayFrames = 0;
    let mediumAttackEnding = document.getElementById('MediumAttackReturnAnimController');
    mediumAttackEnding.style.background = "url('Assets/Sprites/Player/Attacks/Medium_Attack/Medium_Attack_Return_Teleport.png')";
    mediumAttackEnding.style.width = '42px';
    mediumAttackEnding.style.height = '72px';
    mediumAttackEnding.style.margin = '255px 650px';

    endingID = setInterval(() => {
        delayFrames++;
        if(delayFrames == 1){
            clearInterval(endingID);
            mediumAttackEnding.style.margin = '255px 230px';
            ResetMediumAttackAnimations();
        }
    }, 50);
}

function ResetMediumAttackAnimations(){
    document.getElementById('MediumAttackReturnAnimController').style.visibility = 'hidden';
    document.getElementById('IdleAnimController').style.visibility = 'visible';
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




       


