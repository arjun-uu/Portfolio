import { useState, useEffect } from 'react';

export function useJwtDecoder() {
  const [jwtInput, setJwtInput] = useState('');
  const [jwtHeader, setJwtHeader] = useState<any>(null);
  const [jwtPayload, setJwtPayload] = useState<any>(null);
  const [jwtError, setJwtError] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!jwtInput.trim()) {
      setJwtHeader(null);
      setJwtPayload(null);
      setJwtError(null);
      return;
    }

    const parts = jwtInput.trim().split('.');
    if (parts.length !== 3) {
      setJwtError('Invalid JWT format: Tokens must have exactly 3 parts separated by dots.');
      setJwtHeader(null);
      setJwtPayload(null);
      return;
    }

    try {
      const base64Decode = (str: string) => {
        let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        while (base64.length % 4) {
          base64 += '=';
        }
        return decodeURIComponent(
          atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
      };

      const decodedHeader = JSON.parse(base64Decode(parts[0]));
      const decodedPayload = JSON.parse(base64Decode(parts[1]));

      setJwtHeader(decodedHeader);
      setJwtPayload(decodedPayload);
      setJwtError(null);
    } catch (err: any) {
      setJwtError(`Failed to decode token base64 payload: ${err.message}`);
      setJwtHeader(null);
      setJwtPayload(null);
    }
  }, [jwtInput]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const formatTimestamp = (ts: number) => {
    try {
      const date = new Date(ts * 1000);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()} (Local)`;
    } catch (e) {
      return 'Invalid Timestamp';
    }
  };

  return {
    jwtInput,
    setJwtInput,
    jwtHeader,
    jwtPayload,
    jwtError,
    copied,
    handleCopy,
    formatTimestamp
  };
}
