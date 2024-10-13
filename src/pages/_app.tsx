import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from '@/components/ui/loader';
import { wrapper } from '@/store/store';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Component {...props.pageProps} />
      </PersistGate>
    </Provider>
  );
}
