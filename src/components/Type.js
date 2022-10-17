import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div className="text-2xl font-bold  flex gap-2">
            <Typewriter
                options={{
                    strings: ["Front End Developer.", "React Developer.", "MERN Stack Developer.", "Quick Learner."],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                }}
            />
        </div>
    );
}

export default Type;