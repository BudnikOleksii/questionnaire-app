import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
