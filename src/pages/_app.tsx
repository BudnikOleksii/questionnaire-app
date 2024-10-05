import type { AppProps } from 'next/app';

import '@/styles/globals.css';

export default function App({ Component, ...props }: AppProps) {
  return <Component {...props} />;
}
