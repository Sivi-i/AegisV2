var tID;
let position = 0;
let animationFrames = 0;
let delayFrames = 0;
let spriteMovementTool = new SpriteMovementAnimator();

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
            document.getElementById('MediumAttackStartAnimController').style.visibility = 'hidden';
            MediumAttackChargeUpAnimation(); 
          }
    }, 100);
}

function MediumAttackChargeUpAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('MediumAttackChargeUpAnimController').style.visibility = 'visible';

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
            document.getElementById('MediumAttackChargeUpAnimController').style.visibility = 'hidden';
            MediumAttackRushAnimation();
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
            duration: 525,
            iterations: 1
        }
    )
}

function MediumAttackLandingAnimation(){ 
    position = 0;
    animationFrames = 0;
    document.getElementById('MediumAttackReturnAnimController').style.visibility = 'visible';

    mediumAttackLandingID = setInterval(() => {
        document.getElementById('MediumAttackReturnAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  140){
            position = position + 70;
            animationFrames++;
          }else{
            position = 0;
          }
        
          if(animationFrames == 2){
            clearInterval(mediumAttackLandingID);
            MediumAttackTeleportAnimation();
          }
    }, 75);
}

function MediumAttackTeleportAnimation(){
    let delayFrames = 0;
    let mediumAttackEnding = document.getElementById('MediumAttackReturnAnimController');
    mediumAttackEnding.style.background = "url('Assets/Sprites/Player/Attacks/Medium_Attack/Medium_Attack_Return_Teleport.png')";
    mediumAttackEnding.style.width = '42px';
    mediumAttackEnding.style.height = '72px';
    mediumAttackEnding.style.margin = '255px 670px';

    teleport1ID = setInterval(() => {
        delayFrames++;
        if(delayFrames == 3){
            clearInterval(teleport1ID);
        }
    }, 50);

    teleport2ID = setInterval(() => {
        delayFrames++;
        mediumAttackEnding.style.margin = '255px 230px';
        if(delayFrames == 6){
            clearInterval(teleport2ID);
            ResetMediumAttackAnimations();
        }
    }, 50);
}

function BeginStrongAttack(){
    StrongAttackStartAnimation();
}

function StrongAttackStartAnimation(){
    position = 0;
    animationFrames = 0;
    document.getElementById('IdleAnimController').style.visibility = 'hidden';
    document.getElementById('StrongAttackAnimController').style.visibility = 'visible';

    strongAttackID = setInterval(() => {
        document.getElementById('StrongAttackAnimController').style.backgroundPosition = `-${position}px 0px`;
        if(position <  224.8){
            position = position + 54.1;
            animationFrames++;
          }else{
            position = 0;
          }
        
        if(animationFrames == 4){
            clearInterval(strongAttackID);
            StrongAttackChargePoseAnimation();
        }
    } , 100);
}

function StrongAttackChargePoseAnimation(){
    delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');

    strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Pre_Charge.png')";
    strongAttackController.style.width = '72px';

    delayID = setInterval(() => {
        delayFrames++;
        if(delayFrames == 1){
            clearInterval(delayID);
            StrongAttackChargeAnimation1();
        }
    } , 1);
}

function StrongAttackChargeAnimation1(){
    let delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');

    delayID = setInterval(() => {
        delayFrames++;
        if(delayFrames % 2 > 0){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Charge_Begin.png')";
            strongAttackController.style.width = '82px';
        }
        else{
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Charge_Begin_2.png')";
            strongAttackController.style.backgroundPosition =  "-3px 0px";
            strongAttackController.style.width = '84px';
        }

        if(delayFrames == 15){
            clearInterval(delayID);
            StrongAttackRushStartAnimation();
        }
    } , 100);
}

function StrongAttackRushStartAnimation(){
    let delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');
    strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_Begin.png')";
    strongAttackController.style.width = '124px';

    delayID = setInterval(() => {
        delayFrames++;
        if(delayFrames == 1){
            clearInterval(delayID);
            StrongAttackRushAnimation();
        }
    } , 50);
  
}

function StrongAttackRushAnimation(){
    let strongAttackController = document.getElementById('StrongAttackAnimController');
    let strongAttackRushMovement = document.getElementById('StrongAttackAnimController').animate([
        {transform: 'translateX(325px)'}
    ],
        {
            duration: 300,
            iterations: 1,
            easing: 'ease-out'
        }
    )
    strongAttackRushMovement.play();
    delayFrames = 0;
    delayID1 = setInterval(() => {
        delayFrames++;
        if(delayFrames % 2 > 0){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_1.png')";
            strongAttackController.style.margin = "267px 275px";
            strongAttackController.style.width = '138px';
        }else{
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_2.png')";
            strongAttackController.style.width = "139px";
        }
        if(delayFrames == 11){
            clearInterval(delayID1);
            strongAttackRushMovement.pause();
            StrongAttackLandingTurnAroundAnimation();

        }
    } , 20);

}

function StrongAttackLandingTurnAroundAnimation(){
    delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');
    strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Charge_Begin.png')";
    strongAttackController.style.width = "82px";
    strongAttackController.style.margin = "270px 370px";

    delayID1 = setInterval(() => {
        delayFrames+= 0.5;
        switch(delayFrames){
            case .5:
                strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Landing_1.png')";
                strongAttackController.style.width = "67px";
                break;
            case 1:
                strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Landing_2.png')";
                break;
        }

        if(delayFrames == 1.5){
            clearInterval(delayID1);
            StrongAttackReturnChargeAnimation();
        }
    }, 25); 
    
}

function StrongAttackReturnChargeAnimation(){
    delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');

    delayID1 = setInterval(() => {
        delayFrames++;
        
            if(delayFrames % 2 > 0){
                strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_Charge_1.png')";
            }
            
            if(delayFrames % 2 == 0){
                strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_Charge_2.png')";
                strongAttackController.style.width = "84px";
            }
        
            if(delayFrames == 4){
                clearInterval(delayID1);
                StrongAttackReturnRushAnimation();
            }
    }, 50) 
}

function StrongAttackReturnRushAnimation(){
    delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');
    spriteMovementTool.AnimateXWithEasing(-175, 375, 'ease-out', 1, 'StrongAttackAnimController');
    delayID1 = setInterval(() => {
        delayFrames++;
        if(delayFrames % 2 > 0){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_Return_1.png')";
            strongAttackController.style.margin = "270px 360px";
            strongAttackController.style.width = '138px';
        }else{
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_Return_2.png')";
            strongAttackController.style.width = "139px";

        }
        if(delayFrames == 7){
            clearInterval(delayID1);
            spriteMovementTool.StopAnimation();
            StrongAttackReturnLandingAnimation();
        }
    } , 50);
}

function StrongAttackReturnLandingAnimation(){
    delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');

    delayID1 = setInterval(() => {
        delayFrames++;

        // if(delayFrames == 1){
        // strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Landing_2.png')";
        // strongAttackController.style.margin = "270px 395px";
        // strongAttackController.style.width = "67px";
        // }

        if(delayFrames == 2){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_To_Normal_1.png')";
            strongAttackController.style.width = "66px";
            strongAttackController.style.height = "48px";
            strongAttackController.style.margin = "280px 395px";
        }
        
        if(delayFrames == 4){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_To_Normal_3.png')";
            strongAttackController.style.margin = "270px 395px";
            strongAttackController.style.width = "61px";
            strongAttackController.style.height = "66px";
        }

        if(delayFrames == 8){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_To_Normal_4.png')";
            
        
        }

        if(delayFrames == 11){
            clearInterval(delayID1);
            strongAttackController.style.visibility = "hidden";
            document.getElementById('IdleAnimController').style.visibility = "visible";
            ResetStrongAttackPlacements();
        }
    }, 34);
}

function ResetStrongAttackPlacements(){
    let strongAttackController = document.getElementById('StrongAttackAnimController');
    strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Start.png')";
    strongAttackController.style.width = "61px";
    strongAttackController.style.height = "66px";
}

function ResetMediumAttackAnimations(){
    document.getElementById('MediumAttackReturnAnimController').style.visibility = 'hidden';
    document.getElementById('IdleAnimController').style.visibility = 'visible';
    document.getElementById('MediumAttackStartAnimController').style.background = "url('Assets/Sprites/Player/Attacks/Medium_Attack/Medium_Attack_Start.png')";
    let mediumAttackPlacements = document.getElementById('MediumAttackReturnAnimController');
    mediumAttackPlacements.style.background = "url('Assets/Sprites/Player/Attacks/Medium_Attack/Medium_Attack_Start.png')";
    mediumAttackPlacements.style.margin = '270px 650px';
    mediumAttackPlacements.style.width = '70px';
    mediumAttackPlacements.style.height = '70px';
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

function AnimationStart(){
    IdleAnimation();
    BeginMageIdle();
}




       


