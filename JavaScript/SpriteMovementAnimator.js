class SpriteMovementAnimator{
    elementToAnimate;
    animationDuration;
    animationIteration;
    translateXAmount;
    translateYAmount;
    easingType;
    animatorController;
    

    constructor(){

    }

    AnimateXWithEasing(TransformX, Duration, EasingType, Iterations, ElementToAnimate){
        this.translateXAmount = TransformX;
        this.animationDuration = Duration;
        this.animationIteration = Iterations;
        this.easingType = EasingType;
        this.elementToAnimate = ElementToAnimate;
        this.StartXAnimation();
    }

    AnimateYWithEasing(TransformY, Duration, EasingType, Iterations, ElementToAnimate){
        this.translateYAmount = TransformY;
        this.animationDuration = Duration;
        this.animationIteration = Iterations;
        this.easingType = EasingType;
        this.elementToAnimate = ElementToAnimate;
    }

    AnimateXYWithEasing(TransformX, TransformY, Duration, EasingType, Iterations, ElementToAnimate){
        this.translateXAmount = TransformX;
        this.translateYAmount = TransformY;
        this.animationDuration = Duration;
        this.animationIteration = Iterations;
        this.easingType = EasingType;
        this.elementToAnimate = ElementToAnimate;
    }

    StartXAnimation(){
        this.animatorController = document.getElementById(`${this.elementToAnimate}`).animate([
            { transform: `translateX(${this.translateXAmount}px)`},
        ],
            {
                duration: this.animationDuration,
                iterations: this.animationIteration,
                easing: `${this.easingType}`
            }
        );
    }
    
    StartYAnimation(){

    }

    StartXYAnimation(){

    }

    StopAnimation(){
        this.animatorController.pause();
    }
    
}