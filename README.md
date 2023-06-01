# ⚛️ Media Query Components

Inspired by [this](https://dev.to/justincy/4-patterns-for-responsive-props-in-react-39ak) blog post on [dev.to](https://dev.to).

## Usage

To get the current screen size, you can use the `useBreakpoints` hook:

```jsx
// src/MyComponent.tsx
import { useBreakpoints } from '~/hooks/useBreakpoints';

export default function MyComponent() {
  const { current } = useBreakpoints();

  return (
    <div>
      <h1>
        My current viewport size is: <span>{current}</span>
      </h1>
    </div>
  );
}
```

Or better yet, use the `Breakpoint` component to render nested components conditionally:

```jsx
// src/MyComponent.tsx
import Breakpoint from '~/components/Breakpoint';
import MobileLayout from '...';
import Sidebar from '...';
import Content from '...';

export default function MyComponent() {
  return (
    <div>
      <Breakpoint size='xs'>
        <MobileLayout />
      </Breakpoint>
      <Breakpoint size='md'>
        <Sidebar />
        <Content />
      </Breakpoint>
    </div>
  );
}
```

The following breakpoints are handled by this example:

- `xs` (<=`640px`)
- `sm` (between `641px` and `768px`)
- `md` (between `769px` and `1024px`)
- `lg` (>= `1025px`)
