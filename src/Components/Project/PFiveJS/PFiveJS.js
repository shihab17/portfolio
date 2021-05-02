import React from 'react';
import Sketch from "react-p5";

const PFiveJS = () => {
    const setup = (p5, canvasParentRef) => {
       
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    };

    const draw = (p5) => {
       
        let x = 10;
        let y = 10;
        // let x = p5.random(p5.windowWidth);
        // let y = p5.random(p5.windowHeight);
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        for (let i = 0; i <1; i++) {
            p5.ellipse(x, y, 20, 20);
           
        }
        y++;
        
    };
    return (
        <div>
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};

export default PFiveJS;