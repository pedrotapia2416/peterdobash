import type { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { i18next } from '../i18n/i18n';
import { store } from '../store/store';
import { DynamicFavicon } from '../../shared/components/DynamicFavicon/DynamicFavicon';
import { SonicCursor } from '../../shared/components/SonicCursor/SonicCursor';
import { ClientNavigation } from './ClientNavigation';
import { LanguageSync } from './LanguageSync';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18next}>
        <ClientNavigation />
        <LanguageSync />
        <DynamicFavicon />
        {children}
        <SonicCursor />
      </I18nextProvider>
    </ReduxProvider>
  );
}
