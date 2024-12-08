import React, { createContext, useState, useContext, useMemo} from 'react';

const MusicContext = createContext();

export const useMusicContext = () => useContext(MusicContext);

export function MusicProvider({ children }) {
  const songs = [
    {
      file: 'apt.mp3',
      title: 'APT.',
      artist: 'ROSÉ & Bruno Mars',
      albumArt: 'apt.jpg',
      spotify: "https://open.spotify.com/track/5vNRhkKd0yEAg8suGBpjeY"
    },
    {
      file: 'bubble-gum.mp3',
      title: 'Bubble Gum',
      artist: 'NewJeans',
      albumArt: 'bubble-gum.jpg',
      spotify: "https://open.spotify.com/track/19D8LNpWwIPpi6hs9BG7dq"
    },
    {
      file: 'dimple.mp3',
      title: 'Dimple',
      artist: 'BTS',
      albumArt: 'dimple.jpg',
      spotify: "https://open.spotify.com/track/1rLkzFZdokhx6Wcs80uvnw"
    }
  ];

  const initialRandomIndex = useMemo(() => Math.floor(Math.random() * songs.length), []);

  const [currentSongIndex, setCurrentSongIndex] = useState(initialRandomIndex);

  const currentSong = songs[currentSongIndex];

  const value = {
    songs,
    currentSong,
    currentSongIndex,
    setCurrentSongIndex,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
}