import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFolder, FiZap, FiCpu, FiAward } from 'react-icons/fi';
import { siteConfig } from '../../../constants/site';
import { localDevQuotes, Quote } from '../../../data/quotes';

export function useHome() {
  const navigate = useNavigate();
  const [quote, setQuote] = useState<Quote>({ text: '', author: '' });

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

  const stats = [
    { label: "Projects Built", count: "20+", icon: FiFolder, color: "text-brand-accent-secondary bg-brand-accent-secondary/10 border-brand-accent-secondary/20" },
    { label: "Years Coding", count: "3+", icon: FiZap, color: "text-brand-accent-primary bg-brand-accent-primary/10 border-brand-accent-primary/20" },
    { label: "Technologies", count: "10+", icon: FiCpu, color: "text-brand-accent-purple bg-brand-accent-purple/10 border-brand-accent-purple/20" },
    { label: "Learning Mode", count: "24/7", icon: FiAward, color: "text-brand-accent-orange bg-brand-accent-orange/10 border-brand-accent-orange/20" }
  ];

  return {
    navigate,
    quote,
    stats,
    availability: siteConfig.availability
  };
}
