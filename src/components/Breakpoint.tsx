import { Size, useBreakpoints } from '~/hooks/useBreakpoints';

type BreakpointProps = {
  size: Size;
  children: React.ReactElement;
};

export default function Breakpoint({ size, children }: BreakpointProps) {
  const { current } = useBreakpoints();
  // 👇 render children if the current screensize is the desired viewport size
  return current === size ? children : null;
}
