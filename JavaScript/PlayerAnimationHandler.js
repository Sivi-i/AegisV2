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
    spriteMovementTool.AnimateXWithEasing(325, 250, 'ease-out', 1, 'StrongAttackAnimController');
   
    delayFrames = 0;
    delayID1 = setInterval(() => {
        delayFrames++;
        if(delayFrames % 2 > 0){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_1.png')";
            strongAttackController.style.width = '138px';
        }else{
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_2.png')";
            strongAttackController.style.width = "139px";
        }
        if(delayFrames == 11){
            clearInterval(delayID1);
            spriteMovementTool.StopAnimation();
            StrongAttackLandingTurnAroundAnimation();

        }
    } , 20);

}

function StrongAttackLandingTurnAroundAnimation(){
    delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');
    strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Charge_Begin.png')";
    strongAttackController.style.width = "82px";
    strongAttackController.style.margin = "270px 600px";

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
    spriteMovementTool.AnimateXWithEasing(-400, 375, 'ease-out', 1, 'StrongAttackAnimController');
    delayID1 = setInterval(() => {
        delayFrames++;
        if(delayFrames % 2 > 0){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_Return_1.png')";
            strongAttackController.style.width = '138px';
        }
        
        if(delayFrames % 2 == 0){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Rush_Return_2.png')";
            strongAttackController.style.width = "139px";
        }
        
        if(delayFrames == 6){
            clearInterval(delayID1);
            StrongAttackReturnLandingAnimation();
            
        }
    } , 50);
}

function StrongAttackReturnLandingAnimation(){
    delayFrames = 0;
    let strongAttackController = document.getElementById('StrongAttackAnimController');

    delayID1 = setInterval(() => {
        delayFrames++;

        if(delayFrames == 2){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_To_Normal_1.png')";
            strongAttackController.style.width = "66px";
            strongAttackController.style.height = "48px";
            strongAttackController.style.margin = "270px 220px";
        }
        
        if(delayFrames == 4){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_To_Normal_3.png')";
            strongAttackController.style.width = "61px";
            strongAttackController.style.height = "66px";
            strongAttackController.style.margin = "270px 220px";

        }

        if(delayFrames == 8){
            strongAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Strong_Attack/Strong_Attack_Return_To_Normal_4.png')";
            strongAttackController.style.margin = "270px 220px";
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

function BeginBurstAttack(){
    BurstBombAnimation();
}

function BurstBombAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');

    burstAttackController.style.visibility = "visible";
    document.getElementById('IdleAnimController').style.visibility = "hidden";
    
    burstBombID = setInterval(() => {
        animationFrames++;
        switch(animationFrames){
            case 5:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Burst_Bomb/Burst_Bomb_2.png')";
                burstAttackController.style.width = "63px";
                break;
            case 7:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Burst_Bomb/Burst_Bomb_3.png')";
                break;
            case 9:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Burst_Bomb/Burst_Bomb_4.png')";
                break;
            case 11:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Burst_Bomb/Burst_Bomb_5.png')";
                break;
            case 13:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Burst_Bomb/Burst_Bomb_6.png')";
                break;
            case 15:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Burst_Bomb/Burst_Bomb_7.png')";
                break;
            case 17:
            clearInterval(burstBombID);
            RocketJumpChargeAnimation();
            break;
        }

    }, 50);
}

function RocketJumpChargeAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Rocket_Jump/Rocket_Jump_2.png')";
    burstAttackController.style.margin = "270px 230px";

    rocketJumpChargeID = setInterval(() => {
        animationFrames++;
            if(animationFrames % 2 > 0){
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Rocket_Jump/Rocket_Jump_Charge_2.png')";
                burstAttackController.style.width = "54px";
                burstAttackController.style.margin = "250px 230px";

            }

            if(animationFrames % 2 == 0){
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Rocket_Jump/Rocket_Jump_Charge_1.png')";
                burstAttackController.style.width = "54px";
                burstAttackController.style.height = "87px";
            } 

            if(animationFrames == 6){
                clearInterval(rocketJumpChargeID);
                RocketJumpBoostAnimation();
            }
    },95);
}

function RocketJumpBoostAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Rocket_Jump/Rocket_Jump_Boost_1.png')";
    burstAttackController.style.height = "138px";
    burstAttackController.style.width = "70px";
    burstAttackController.style.margin = "170px 225px";
    spriteMovementTool.AnimateYWithEasing(-100, 400, 'ease-out', 1, 'BurstAttackAnimController');
    rocketJumpBoostID = setInterval(() => {
        

        if(animationFrames % 2 > 0){
            burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Rocket_Jump/Rocket_Jump_Boost_1.png')";
        }

         if(animationFrames % 2 == 0){
            burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Rocket_Jump/Rocket_Jump_Boost_2.png')";
            burstAttackController.style.backgroundPosition = "0px 7px";
         }

         if(animationFrames == 2){
            clearInterval(rocketJumpBoostID);
            spriteMovementTool.StopAnimation();
            AirChargeAnimation();

         }
         animationFrames++;

    }, 100)
}

function AirChargeAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Charge/Air_1.png')";
    burstAttackController.style.width = "88px";
    burstAttackController.style.height = "63px";
    burstAttackController.style.margin = "140px 225px";
    RocketJumpEndFloat();
    airChargeID = setInterval(() => {

        if(animationFrames == 0){
            
        }

        if(animationFrames > 3){
            if(animationFrames % 2 > 0){
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Charge/Air_Charge_2.png')";
            }

            if(animationFrames % 2 == 0){
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Charge/Air_Charge_1.png')";
            }
        }

        if(animationFrames == 8){
            clearInterval(airChargeID);
            AirBurstRightAnimation();
        }

       animationFrames++;

    }, 100); 

}

function RocketJumpEndFloat(){
    spriteMovementTool.AnimateYWithEasing(-30, 375, 'ease-out', 1, 'BurstAttackAnimController');
}

function AirBurstRightAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.transform = "0px";
    spriteMovementTool.AnimateXWithEasing(475, 300, 'ease-out', 1, 'BurstAttackAnimController');

    airBurstRightID = setInterval(() => {
        animationFrames++;

           if(animationFrames % 2 == 0){
                 burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Right/Air_Burst_Right_1.png')";
                 burstAttackController.style.width = "126px";
           }

           if( animationFrames % 2 > 0){
                    burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Right/Air_Burst_Right_2.png')";
                    burstAttackController.style.width = "128px";
           }
        
           
           if(animationFrames == 4){
                clearInterval(airBurstRightID);
                AirBurstRightReleaseAnimation();
           }

    } , 100)
}

function AirBurstRightReleaseAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Right/Air_Burst_Right_3.png')";
    burstAttackController.style.width = "80px";
    burstAttackController.style.margin = "140px 700px";
    spriteMovementTool.AnimateXWithEasing(50, 200, 'ease-out', 1, 'BurstAttackAnimController');

    airBurstRightReleaseID = setInterval(() => {
        switch(animationFrames){
            case 0:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Right/Air_Burst_Right_4.png')";
                break;
            case 1:
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Right/Air_Burst_Right_5.png')";
                break;
            case 2: 
                burstAttackController.style.width = "42px";
                burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Medium_Attack/Medium_Attack_Return_Teleport.png')";
                break;
            case 5: 
                clearInterval(airBurstRightReleaseID);
                AirBurstBottomLeftFloatAnimation();
            }
        animationFrames++;    
    }, 25);
}

function AirBurstBottomLeftFloatAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.margin = "0px 640px";
    
    airBurstBottomLeftID = setInterval(() => {
        if(animationFrames == 1){
             burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Bottom_Left/Air_Burst_Bottom_Left_5.png')";
             burstAttackController.style.width = "70px";
             burstAttackController.style.height = "70px";
        }

        if(animationFrames == 3){
            clearInterval(airBurstBottomLeftID);
            AirBurstBottomLeftAnimation();
        }

        animationFrames++;
    } , 50);
}

function AirBurstBottomLeftAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.margin = "0px 630px";
    spriteMovementTool.AnimateXYWithEasing(-200, 220, 200, 'ease-out', 1, 'BurstAttackAnimController');
    airBurstBottomLeftRushID = setInterval(() => {
        if(animationFrames % 2 == 0){
            burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Bottom_Left/Air_Burst_Bottom_Left_1.png')";
            burstAttackController.style.width = "100px";
            burstAttackController.style.height = "100px";
        }

        if(animationFrames % 2 > 0){
            burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Bottom_Left/Air_Burst_Bottom_Left_2.png')";
            burstAttackController.style.width = "94px";
            burstAttackController.style.height = "94px";
            burstAttackController.style.backgroundPosition = "5px 5px";
        }

        if(animationFrames == 4){
            clearInterval(airBurstBottomLeftRushID);
            AirBurstBottomLeftReleaseAnimation();
        }
        animationFrames++;
    }, 50);
}

function AirBurstBottomLeftReleaseAnimation(){
    animationFrames = 0;
    let burstAttackController = document.getElementById('BurstAttackAnimController');
    burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Burst_Attack/Air_Burst/Bottom_Left/Air_Burst_Bottom_Left_3.png')";
    burstAttackController.style.width = "80px";
    burstAttackController.style.height = "80px";
    burstAttackController.style.margin = "220px 450px";
    spriteMovementTool.AnimateXYWithEasing(-20, 20, 400, 'ease-out', 1, 'BurstAttackAnimController');
    setTimeout(() => {}, 3000);
    burstAttackController.style.background = "url('Assets/Sprites/Player/Attacks/Medium_Attack/Medium_Attack_Return_Teleport.png')"; 
    burstAttackController.style.width = "42px";
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




       


