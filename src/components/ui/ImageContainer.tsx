import React from 'react';

export interface ImageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9' | '3/2';
  src?: string;
  alt?: string;
  caption?: string;
  technicalLabel?: string;
  showGridLines?: boolean;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  aspectRatio = '16/9',
  src,
  alt = 'Visual asset',
  caption,
  technicalLabel = 'IMG_ASSET // 01',
  showGridLines = true,
  className = '',
  id,
  ...props
}) => {
  const aspectClasses = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-[1/1]',
    '21/9': 'aspect-[21/9]',
    '3/2': 'aspect-[3/2]',
  };

  return (
    <figure className="w-full flex flex-col gap-2">
      <div
        id={id}
        className={`relative w-full overflow-hidden rounded-[6px] border border-[var(--border)] bg-[var(--surface-hover)] ${aspectClasses[aspectRatio]} ${className}`}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          /* Technical placeholder frame */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[var(--surface-hover)] select-none">
            {showGridLines && (
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px',
                }}
              />
            )}

            {/* Corner ticks */}
            <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#00F2FE]" />
            <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#00F2FE]" />
            <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[var(--border-strong)]" />
            <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[var(--border-strong)]" />

            {/* Center crosshair symbol */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center bg-[var(--surface-subtle)]">
                <div className="w-2.5 h-2.5 bg-[#00F2FE] rounded-full animate-pulse" />
              </div>
              <div className="text-center">
                <span className="font-mono text-[10px] tracking-widest text-[var(--foreground-muted)] uppercase block">
                  {technicalLabel}
                </span>
                <span className="text-xs text-[var(--foreground-subtle)] mt-0.5 block">
                  Ratio {aspectRatio.replace('/', ':')} • High-Fidelity Canvas
                </span>
              </div>
            </div>

            {/* Bottom coordinate readout */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-[#475569]">
              <span>SYS_RES: 2400×1350</span>
              <span className="text-[#00F2FE]/70">STATE: READY</span>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-xs text-[var(--foreground-subtle)] font-mono flex items-center gap-2">
          <span className="text-[var(--accent)]">//</span>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
