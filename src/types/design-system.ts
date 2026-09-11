export type ThemeMode = 'dark' | 'light';
export type SurfaceVariant = 'light' | 'dark' | 'muted' | 'accent-subtle';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'eyebrow';

export type CardVariant = 'default' | 'subtle' | 'elevated' | 'outline' | 'technical';

export type BadgeVariant = 'default' | 'accent' | 'neutral' | 'success' | 'outline';

export interface SpacingToken {
  name: string;
  size: string;
  px: number;
  rem: string;
  usage: string;
}

export interface ColorToken {
  name: string;
  variable: string;
  lightValue: string;
  darkValue: string;
  role: string;
  contrastRatio?: string;
}

export interface TypographyToken {
  name: string;
  tag: string;
  desktopSize: string;
  mobileSize: string;
  lineHeight: string;
  weight: string;
  letterSpacing: string;
  usage: string;
}
