import { useState, useEffect } from 'react';

export function useRegexTester() {
  const [regexPattern, setRegexPattern] = useState('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}');
  const [regexFlags, setRegexFlags] = useState({ g: true, i: true, m: false });
  const [regexTarget, setRegexTarget] = useState('My emails are arjun@example.com and dev@portfolio.io.');
  const [regexMatches, setRegexMatches] = useState<RegExpExecArray[]>([]);
  const [regexError, setRegexError] = useState<string | null>(null);

  const getFlagsString = () => {
    let flags = '';
    if (regexFlags.g) flags += 'g';
    if (regexFlags.i) flags += 'i';
    if (regexFlags.m) flags += 'm';
    return flags;
  };

  useEffect(() => {
    if (!regexPattern) {
      setRegexMatches([]);
      setRegexError(null);
      return;
    }

    try {
      const flags = getFlagsString();
      const re = new RegExp(regexPattern, flags);
      const matches: RegExpExecArray[] = [];
      
      if (flags.includes('g')) {
        let match;
        re.lastIndex = 0;
        let limit = 0;
        while ((match = re.exec(regexTarget)) !== null && limit < 1000) {
          matches.push(match);
          if (match[0] === '') re.lastIndex++;
          limit++;
        }
      } else {
        const match = re.exec(regexTarget);
        if (match) matches.push(match);
      }
      
      setRegexMatches(matches);
      setRegexError(null);
    } catch (err: any) {
      setRegexError(err.message);
      setRegexMatches([]);
    }
  }, [regexPattern, regexFlags, regexTarget]);

  const toggleFlag = (flag: 'g' | 'i' | 'm') => {
    setRegexFlags(prev => ({ ...prev, [flag]: !prev[flag] }));
  };

  return {
    regexPattern,
    setRegexPattern,
    regexFlags,
    toggleFlag,
    regexTarget,
    setRegexTarget,
    regexMatches,
    regexError
  };
}
