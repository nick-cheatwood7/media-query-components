import { useMediaQuery } from './useMediaQuery';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;

export type Size = (typeof sizes)[number];

type Breakpoints = {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  current: Size;
};

export const useBreakpoints = () => {
  const breakpoints: Breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    current: 'xs' // default
  };
  if (breakpoints.isXs) breakpoints.current = 'xs';
  if (breakpoints.isSm) breakpoints.current = 'sm';
  if (breakpoints.isMd) breakpoints.current = 'md';
  if (breakpoints.isLg) breakpoints.current = 'lg';
  return breakpoints;
};
