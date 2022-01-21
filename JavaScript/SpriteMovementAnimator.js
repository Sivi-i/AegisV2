class SpriteMovementAnimator{
    elementToAnimate;
    animationDuration;
    animationIteration;
    translateXAmount;
    translateYAmount;
    easingType;
    animatorController;
    

    constructor(){}

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
        this.StartYAnimation();
    }

    AnimateXYWithEasing(TransformX, TransformY, Duration, EasingType, Iterations, ElementToAnimate){
        this.translateXAmount = TransformX;
        this.translateYAmount = TransformY;
        this.animationDuration = Duration;
        this.animationIteration = Iterations;
        this.easingType = EasingType;
        this.elementToAnimate = ElementToAnimate;
        this.StartXYAnimation();
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
        this.animatorController = document.getElementById(`${this.elementToAnimate}`).animate([
            { transform: `translateY(${this.translateYAmount}px)`},
        ],
            {
                duration: this.animationDuration,
                iterations: this.animationIteration,
                easing: `${this.easingType}`
            }
        );
    }

    StartXYAnimation(){
        this.animatorController = document.getElementById(`${this.elementToAnimate}`).animate([
            { transform: `translate3d(${this.translateXAmount}px, ${this.translateYAmount}px, 0px)`},
            
        ],
            {
                duration: this.animationDuration,
                iterations: this.animationIteration,
                easing: `${this.easingType}`
            }
        );
    }

    StopAnimation(){
        this.animatorController.pause();
        this.animatorController.cancel();
    }

    StopAnimationInPlace(){
        this.animatorController.commitStyles();
    }

    ClearAnimation(){
        this.animatorController.cancel();
        this.elementToAnimate = null;
        this.animationDuration = null;
        this.animationIteration = null;
        this.translateXAmount = null;
        this.translateYAmount = null;
        this.easingType = null;
        this.animatorController = null;
    }
    
}