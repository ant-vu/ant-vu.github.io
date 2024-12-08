import React from 'react';
import Portfolio from './Portfolio';
import Menu from './Menu';
import AudioPlayer from './AudioPlayer';
import {MusicProvider} from './MusicContext';
import {FiberContainer} from './FiberContainer';

function Main() {
    return (
        <div className="App">
            <div
                className="relative min-h-screen selection:bg-da_green md:bg-zinc-100 bg-zinc-100 md:bg-cover overflow-hidden ">
                <div className="">
                    <div className="relative z-10 fade-in-anim">
                        <MusicProvider>
                            <div
                                className="md:flex md:flex-row md:justify-between font-Inter text-sm min-h-screen border-4 border-auto border-da_green">
                                <div className="bg-zinc-100 relative z-20">
                                    <Portfolio
                                        className="mt-8 mb-8 md:w-[26rem] ml-8 mr-8 md:ml-16 md:mr-16 md:mt-8 flex justify-center md:justify-start text-left"/>
                                </div>
                                <div className="relative z-30 md:w-full flex items-center justify-center">
                                    <div className="absolute inset-0 z-0 md:h-[100rem]">
                                        <FiberContainer/>
                                    </div>
                                </div>
                                <div className="md:flex md:flex-col md:items-end relative z-30">
                                    <Menu className="md:mr-16 md:mt-8 mb-8 ml-16 text-center relative md:fixed"/>
                                    <AudioPlayer
                                        className="hidden md:block md:mt-auto fixed bottom-0 right-0 mb-8 mr-16 overflow-hidden"/>

                                    <div
                                        className="fixed overflow-hidden bottom-0 left-0 mb-8 ml-6 rotate-180 [writing-mode:vertical-rl]">
                                        <p className="font-DMMono">folio // 2024</p>
                                    </div>
                                </div>
                            </div>
                        </MusicProvider>
                    </div>
                </div>
                <div className="relative z-30 bg-da_green">
                    <p className="uppercase font-DMMono">@Anthony Vu</p>
                </div>
            </div>
            <video id="video" className='hidden' loop>
                <source src={process.env.PUBLIC_URL + "/videos/gala.mp4"} type="video/mp4"></source>
            </video>
        </div>
    );
}

export default Main;