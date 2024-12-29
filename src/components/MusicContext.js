import React, { createContext, useState, useContext, useMemo} from 'react';

const MusicContext = createContext();

export const useMusicContext = () => useContext(MusicContext);

export function MusicProvider({ children }) {
  const songs = [
    {
      file: 'TODO',
      title: 'TODO',
      artist: 'TODO',
      albumArt: 'TODO',
      spotify: 'TODO'
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