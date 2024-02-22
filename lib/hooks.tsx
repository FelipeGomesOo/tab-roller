import { useState, useEffect, useRef } from 'react';
import { animate } from "framer-motion";

export function useFormInput({initialValue}: {initialValue: string | number}) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}

export function useAnimation({duration}: {duration: number}) {
    const [animation, setAnimation] = useState<any>(null);
    const animationRef = useRef<any>();

    useEffect(() => {
        const animation = animate(animationRef.current, 
            { transform: ["translateY(0)","translateY(-100%)"]},
            { duration: duration / 1000, ease: "linear" }
        );  
        setAnimation(animation);
        animation.pause();

        // Controll animation timeline with mouse wheel
      const wheelTimeline = (e: WheelEvent) => { 
        let timeChange = e.deltaY ; 
        animation.time += timeChange / 250; 
        //setProgress((old) => old + (timeChange))
        console.log(timeChange, 'time change')
    };

    // Controll animation timeline with swipe gesture
    let startTouchPosition: number | null = null;

    const touchStartTimeline = (e: TouchEvent) => {
        startTouchPosition = e.touches[0].clientY;
    };

    const touchMoveTimeline = (e: TouchEvent) => {
        if (startTouchPosition === null) {
            return;
        }
        let touchChange = startTouchPosition - e.touches[0].clientY;
        animation.time += touchChange / 1000; 
        console.log(touchChange, 'touch change')
        //startTouchPosition = null;
    };

    window.addEventListener('wheel', wheelTimeline);
    window.addEventListener('touchstart', touchStartTimeline);
    window.addEventListener('touchmove', touchMoveTimeline);
 

    return () => {
        window.removeEventListener('wheel', wheelTimeline);
        window.removeEventListener('touchstart', touchStartTimeline);
        window.removeEventListener('touchmove', touchMoveTimeline);
    }
    }, [duration]);
    
    return [animation, animationRef];
}
