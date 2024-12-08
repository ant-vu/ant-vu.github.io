import React, {useEffect, useRef, useState} from 'react';
import {useMusicContext} from './MusicContext';

/**
 * AudioPlayer component for playing audio songs.
 * @param {Object} props - The component props.
 * @param {string} props.className - The CSS class name for the component.
 * @returns {JSX.Element} The rendered AudioPlayer component.
 */
function AudioPlayer({className}) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    const {songs, currentSong, setCurrentSongIndex} = useMusicContext();
    useEffect(() => {
        audioRef.current = new Audio(`${process.env.PUBLIC_URL}/sounds/songs/${currentSong.file}`);
        audioRef.current.addEventListener('timeupdate', updateProgress);
        audioRef.current.addEventListener('ended', handleNext);

        return () => {
            audioRef.current.removeEventListener('timeupdate', updateProgress);
            audioRef.current.removeEventListener('ended', handleNext);
        };
    }, [currentSong]);

    const updateProgress = () => {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (e) => {
        audioRef.current.currentTime = (audioRef.current.duration / 100) * e.target.value;
        setProgress(e.target.value);
    };

    const handlePrevious = () => {
        audioRef.current.pause();
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
        setIsPlaying(false);
    };

    const handleNext = () => {
        audioRef.current.pause();
        setCurrentSongIndex((prevIndex) =>
            prevIndex === songs.length - 1 ? 0 : prevIndex + 1
        );
        setIsPlaying(false);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentSong, isPlaying]);

    return (
        <div className={`${className} /* other classes */`}>
            <div className="audio-player lg:w-[17.5rem] w-[12.5rem] bg-zinc-100 p-4 rounded-lg border-2 border-black">
                <div className="grid-cols-2">
                    <div className="grid grid-cols-3 items-center">
                        <img className="w-[4rem] h-[4rem] col-span-1"
                             src={`${process.env.PUBLIC_URL}/images/${currentSong.albumArt}`}
                             alt={`${currentSong.title} album art`}/>
                        <div className='col-span-2 ml-2'>
                            <p className='font-semibold uppercase text-left text-xl'>
                                {currentSong.title}
                            </p>
                            <p className='font-DMMono uppercase text-left'>
                                {currentSong.artist}
                            </p>
                        </div>
                    </div>
                    <div
                        className="controls mt-4 font-Inter grid grid-cols-3 place-content-between justify-items-center">
                        <img className="w-5 h-5 cursor-pointer" src={process.env.PUBLIC_URL + "/icons/rewind.svg"}
                             alt="Previous" onClick={handlePrevious}/>
                        <img className="w-5 h-5 cursor-pointer"
                             src={isPlaying ? process.env.PUBLIC_URL + "/icons/pause.svg" : process.env.PUBLIC_URL + "/icons/play.svg"}
                             alt={isPlaying ? "Pause" : "Play"} onClick={togglePlay}/>
                        <img className="w-5 h-5 cursor-pointer" src={process.env.PUBLIC_URL + "/icons/fast-forward.svg"}
                             alt="Next" onClick={handleNext}/>
                    </div>
                </div>
                <input
                    className='mt-3 accent-da_green'
                    type="range"
                    onChange={handleProgressChange}
                    step="1"
                    min="0"
                    max="100"
                    value={progress}
                />
            </div>
            <div>
                <p className='mt-4 text-right text-xs font-DMMono uppercase'>Last Updated 2024-12</p>
            </div>
        </div>
    );
}

export default AudioPlayer;