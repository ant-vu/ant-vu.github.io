import React, {useState} from 'react';
import Confetti from 'react-dom-confetti';

function Header() {
    const [showMore, setShowMore] = useState(false);
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

    const toggleShowMore = () => {
        setShowMore(!showMore);
        if (!showMore) {
            const openSound = new Audio(process.env.PUBLIC_URL + `/sounds/sfx/open.wav`);
            openSound.play();
        } else {
            const closeSound = new Audio(process.env.PUBLIC_URL + `/sounds/sfx/close.wav`);
            closeSound.play();
        }
    };

    return (
        <header className="">
            <Confetti active={isExploding} config={config}/>
            <h1 className="font-Outfit text-5xl font-bold">Anthony Vu</h1>
            <p className="font-DMMono font-normal mt-6"><span className="bg-da_green">Welcome</span> to my portfolio! :)</p>
            <div
                className={`transition-all duration-500 ${showMore ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden ${showMore ? '' : 'm-0'}`}>
                <div className="border-2 border-dashed border-da_green rounded-md mt-4 p-2">
                    <img src={process.env.PUBLIC_URL + "/gifs/dance.gif"} alt="Dance GIF"
                         className="w-32 h-32 self-center"/>
                    <p className="mt-4 font-Inter font-normal">
                        I am a full-time SWE at Citigroup and graduated from Mac’s CS program with a 3.97/4 GPA.
                    </p>
                    <p className="mt-4 font-Inter font-normal">
                        With over three years of professional experience across multiple firms, I possess a unique blend of technical expertise and a passion for taking on any challenge.
                    </p>
                </div>
            </div>
            <nav className="flex space-x-4 text-[0.75rem] mt-6">
                <button
                    className="relative overflow-hidden transition-all bg-da_green hover:bg-da_green group rounded-md flex items-center justify-center w-[108px] h-[44px] border-current border-2"
                    onClick={toggleShowMore}
                >
                    <span
                        className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span
                        className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
            {showMore ? 'Minimize' : 'Learn More'}
                        <div className="flex justify-end ml-2">
              <img
                  src={showMore ? process.env.PUBLIC_URL + "/icons/close.svg" : process.env.PUBLIC_URL + "/icons/play.svg"}
                  alt=">" className="w-4 h-4"/>
            </div>
          </span>
                </button>
                <button
                    className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[108px] h-[44px] border-current border-2"
                    onClick={() => {
                        setIsExploding(!isExploding);
                        navigator.clipboard.writeText('ant.vu@icloud.com');
                        alert('Email copied to clipboard! :)');
                    }}
                >
                    <span
                        className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span
                        className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
            Email Me
            <div className="flex justify-end ml-2">
              <img src={process.env.PUBLIC_URL + "/icons/copy.svg"} alt=">"
                   className="w-5 h-5  bg-da_green border-da_green border-2"/>
            </div>
          </span>
                </button>
            </nav>
        </header>
    );
}

export default Header;