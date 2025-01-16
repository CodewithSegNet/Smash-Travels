export const fadeIn = (direction, delay) => {

    return {
        hidden : {
            y : direction === "up" ? 40 : direction === "down" ? -40 : 0,
            opacity : 0,

            x: direction === "left" ? 40 : direction === "right" ?  -40 : 0,
        },

        show : {

            y : 0,
            x : 0,
            opacity : 1,
            transition : {
                type : 'tween',
                duration : 1,
                delay : delay,
                ease : [0.25, 0.25, 0.25, 0.75]
            }
        }
    }

}



export const blurIn = (delay = 3) => ({
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8, // Adjust the duration for smoothness
        delay,
        ease: "easeOut", // Smooth easing
      },
    },
  });
  