import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto text-center py-20 animate-fade-in-up font-mono select-none">
      <FiAlertTriangle className="mx-auto text-5xl text-brand-accent-orange mb-6 animate-pulse" />
      
      <div className="flex flex-col gap-3 mb-8">
        <h1 className="text-4xl font-extrabold text-white">404</h1>
        <div className="text-xs text-brand-accent-orange font-bold uppercase tracking-widest bg-brand-accent-orange/15 border border-brand-accent-orange/20 py-1 px-3 rounded inline-block mx-auto">
          bash: command not found
        </div>
        <p className="text-slate-400 text-xs mt-2 max-w-xs mx-auto font-sans leading-relaxed">
          The directory or file resource path requested could not be resolved by the virtual server router.
        </p>
      </div>

      <Card hoverGlow={false} className="border border-brand-border-dark p-4 bg-brand-bg-panelLight/40 text-left text-xs mb-6 max-w-sm mx-auto">
        <div className="text-slate-500 mb-1">~/portfolio</div>
        <div className="flex items-center gap-2">
          <span className="text-brand-accent-primary font-bold">$</span>
          <span className="text-white font-semibold">cd ~/home</span>
        </div>
      </Card>

      <Button
        variant="primary"
        leftIcon={<FiHome />}
        onClick={() => navigate('/')}
      >
        Return to Home
      </Button>
    </div>
  );
}
export default NotFoundPage;
