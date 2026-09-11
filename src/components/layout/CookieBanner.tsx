import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';
import { Heading, Text } from '../ui/Typography';

interface CookiePreferences {
  essential: boolean;
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
}

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    preferences: false,
    analytics: false,
    advertising: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('oveqira-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(consent));
    }

    const openPreferencesHandler = () => {
      setIsVisible(true);
      setShowPreferences(true);
    };

    document.addEventListener('open-cookie-preferences', openPreferencesHandler);
    return () => {
      document.removeEventListener('open-cookie-preferences', openPreferencesHandler);
    };
  }, []);

  const savePreferences = (prefsToSave: CookiePreferences) => {
    localStorage.setItem('oveqira-cookie-consent', JSON.stringify(prefsToSave));
    setPreferences(prefsToSave);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      preferences: true,
      analytics: true,
      advertising: true
    });
  };

  const handleRejectOptional = () => {
    savePreferences({
      essential: true,
      preferences: false,
      analytics: false,
      advertising: false
    });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 lg:p-8 pointer-events-none flex justify-center"
        >
          <div className="bg-[var(--surface)] border border-[var(--border-strong)] shadow-2xl rounded-[8px] p-6 md:p-8 w-full max-w-4xl pointer-events-auto">
            {!showPreferences ? (
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div className="space-y-4 max-w-2xl">
                  <Heading level="h3" className="text-xl">Your Privacy Matters</Heading>
                  <Text muted className="text-sm leading-relaxed">
                    We use essential technologies to operate this website. Optional technologies may be used to understand website usage and improve your experience where enabled.
                  </Text>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                  <Button variant="outline" size="sm" onClick={() => setShowPreferences(true)} className="justify-center">
                    Manage Preferences
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleRejectOptional} className="justify-center">
                    Reject Optional
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleAcceptAll} className="justify-center">
                    Accept All
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-2">
                  <Heading level="h3" className="text-xl">Manage Cookie Preferences</Heading>
                  <Text muted className="text-sm">Choose which cookies you allow us to use.</Text>
                </div>
                
                <div className="space-y-6">
                  {/* Essential */}
                  <div className="flex items-start justify-between gap-4 p-4 border border-[var(--border)] rounded-[6px] bg-[var(--surface-hover)]">
                    <div className="space-y-1">
                      <p className="font-semibold text-[var(--foreground)] text-sm">Essential</p>
                      <p className="text-xs text-[var(--foreground-muted)]">Required for basic website functionality and security. Cannot be disabled.</p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <div className="w-10 h-6 bg-[var(--accent)] rounded-full relative opacity-50 cursor-not-allowed">
                        <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Preferences */}
                  <div className="flex items-start justify-between gap-4 p-4 border border-[var(--border)] rounded-[6px]">
                    <div className="space-y-1">
                      <p className="font-semibold text-[var(--foreground)] text-sm">Preferences</p>
                      <p className="text-xs text-[var(--foreground-muted)]">Used to remember your settings and choices.</p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <button 
                        onClick={() => setPreferences(prev => ({ ...prev, preferences: !prev.preferences }))}
                        className={`w-10 h-6 rounded-full relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11141A] focus-visible:ring-[var(--accent)] ${preferences.preferences ? 'bg-[var(--accent)]' : 'bg-[var(--border-strong)]'}`}
                      >
                        <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${preferences.preferences ? 'right-1' : 'left-1'}`} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Analytics */}
                  <div className="flex items-start justify-between gap-4 p-4 border border-[var(--border)] rounded-[6px]">
                    <div className="space-y-1">
                      <p className="font-semibold text-[var(--foreground)] text-sm">Analytics</p>
                      <p className="text-xs text-[var(--foreground-muted)]">Helps us understand how visitors interact with the website.</p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <button 
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className={`w-10 h-6 rounded-full relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11141A] focus-visible:ring-[var(--accent)] ${preferences.analytics ? 'bg-[var(--accent)]' : 'bg-[var(--border-strong)]'}`}
                      >
                        <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${preferences.analytics ? 'right-1' : 'left-1'}`} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Advertising */}
                  <div className="flex items-start justify-between gap-4 p-4 border border-[var(--border)] rounded-[6px]">
                    <div className="space-y-1">
                      <p className="font-semibold text-[var(--foreground)] text-sm">Advertising</p>
                      <p className="text-xs text-[var(--foreground-muted)]">Used to deliver and measure relevant advertising.</p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <button 
                        onClick={() => setPreferences(prev => ({ ...prev, advertising: !prev.advertising }))}
                        className={`w-10 h-6 rounded-full relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11141A] focus-visible:ring-[var(--accent)] ${preferences.advertising ? 'bg-[var(--accent)]' : 'bg-[var(--border-strong)]'}`}
                      >
                        <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${preferences.advertising ? 'right-1' : 'left-1'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[var(--border)] w-full">
                  <Button variant="outline" size="sm" onClick={handleRejectOptional} className="justify-center">
                    Reject Optional
                  </Button>
                  <Button variant="primary" size="sm" onClick={handleSavePreferences} className="justify-center sm:ml-auto">
                    Save Preferences
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
