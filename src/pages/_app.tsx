import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
// commit just for testing purposes
export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
