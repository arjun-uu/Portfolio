import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteConfig } from '../../../constants/site';
import { localDevQuotes, Quote } from '../../../data/quotes';
import { homeStatsData } from '../../../data/homeData';
import { useAudio } from '../../../context/AudioContext';

export function useHome() {
  const navigate = useNavigate();
  const [quote, setQuote] = useState<Quote>({ text: '', author: '' });
  const audioContext = useAudio();

  useEffect(() => {
    // 1. Instantly select a random quote from our curated local database
    const randomIndex = Math.floor(Math.random() * localDevQuotes.length);
    setQuote(localDevQuotes[randomIndex]);

    // 2. Fetch a dynamic developer/technology quote asynchronously from Quotable API
    fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
      .then(res => res.json())
      .then(data => {
        if (data && data.content && data.author) {
          setQuote({
            text: data.content,
            author: data.author
          });
        }
      })
      .catch(() => {
    
      });
  }, []);

  const stats = homeStatsData;

  return {
    navigate,
    quote,
    stats,
    availability: siteConfig.availability,
    isPlaying: audioContext.isPlaying,
    trackIndex: audioContext.trackIndex,
    togglePlay: audioContext.togglePlay,
    nextTrack: audioContext.nextTrack,
    prevTrack: audioContext.prevTrack,
    currentTrack: audioContext.currentTrack,
    tracks: audioContext.tracks,
    currentTimeStr: audioContext.currentTimeStr,
    durationStr: audioContext.durationStr,
    progressPercent: audioContext.progressPercent
  };
}
