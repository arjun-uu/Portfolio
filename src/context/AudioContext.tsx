import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { TRACKS } from '../data/homeData';

interface AudioContextType {
  isPlaying: boolean;
  trackIndex: number;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  currentTrack: typeof TRACKS[0];
  tracks: typeof TRACKS;
  currentTimeStr: string;
  durationStr: string;
  progressPercent: number;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync track index / src changes
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(TRACKS[trackIndex].url);
      audioRef.current.volume = 0.2; // comfortable default volume
    } else {
      audioRef.current.src = TRACKS[trackIndex].url;
    }

    // Reset progress timers
    setCurrentTime(0);
    setDuration(0);

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [trackIndex]);

  // Sync play/pause state changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Listen to audio element time and metadata loaded events
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      const handleLoadedMetadata = () => {
        setDuration(audio.duration || 0);
      };
      
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      if (audio.duration) {
        setDuration(audio.duration);
      }

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [trackIndex]);

  // Advance automatically when track ends
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setTrackIndex((prev) => (prev + 1) % TRACKS.length);
      };
      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [trackIndex]);

  // Cleanup on final app unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextTrack = () => setTrackIndex((prev) => (prev + 1) % TRACKS.length);
  const prevTrack = () => setTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        trackIndex,
        togglePlay,
        nextTrack,
        prevTrack,
        currentTrack: TRACKS[trackIndex],
        tracks: TRACKS,
        currentTimeStr: formatTime(currentTime),
        durationStr: formatTime(duration),
        progressPercent
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
