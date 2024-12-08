import {useMusicContext} from './MusicContext';

function SongInfo() {
    const {currentSong} = useMusicContext();

    const handleImageClick = () => {
        window.open(currentSong.spotify);
    };

    return (
        <div className="song-info space-y-2">
            <h2 className='font-DMMono font-medium'>| Want to play some tunes?</h2>
            <div className='flex'>
                <p>
                    You are listening to <span
                    className="bg-da_green">{currentSong.title}</span> by {currentSong.artist}
                </p>
                <img className='ml-2 w-5 h-5 cursor-pointer' src={process.env.PUBLIC_URL + "/icons/spotify.svg"}
                     alt="Spotify Logo" onClick={handleImageClick}/>
            </div>
        </div>
    );
}

export default SongInfo;