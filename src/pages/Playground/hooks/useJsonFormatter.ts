import { useState } from 'react';

export function useJsonFormatter() {
  const [jsonInput, setJsonInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formatJson = (spaces = 2) => {
    if (!jsonInput.trim()) return;
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, spaces));
      setJsonError(null);
    } catch (err: any) {
      setJsonError(err.message);
      setJsonOutput('');
    }
  };

  const minifyJson = () => {
    if (!jsonInput.trim()) return;
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed));
      setJsonError(null);
    } catch (err: any) {
      setJsonError(err.message);
      setJsonOutput('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return {
    jsonInput,
    setJsonInput,
    jsonOutput,
    jsonError,
    formatJson,
    minifyJson,
    copied,
    handleCopy
  };
}
