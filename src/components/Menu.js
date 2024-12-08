import React from 'react';
import Confetti from 'react-dom-confetti';

function Menu({className}) {
    const [isExploding, setIsExploding] = React.useState(false);

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "476px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
    return (
        <div className={`${className} fixed  /* other classes */`}>
            <Confetti active={isExploding} config={config}/>
            <div
                className="menu-container flex flex-row md:flex-col justify-right mr-4 md:space-x-0 space-x-4 p-2 bg-zinc-100 rounded-md border-2 border-black font-DMMono">
                <a className="relative overflow-hidden transition-all bg-zinc-100 hover:bg-da_green group flex items-center justify-center cursor-pointer"
                   onClick={() => {
                       setIsExploding(!isExploding);
                       navigator.clipboard.writeText('ant.vu@icloud.com');
                       alert('Email copied to clipboard! :)');
                   }}>
                    <span
                        className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span
                        className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out group-hover:text-black">
                        Email
                    </span>
                </a>
                <a href='https://github.com/ant-vu' target='_blank'
                   className="relative overflow-hidden transition-all bg-zinc-100 hover:bg-da_green group flex items-center justify-center">
                    <span
                        className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span
                        className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out group-hover:text-black">
                        GitHub
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Menu;