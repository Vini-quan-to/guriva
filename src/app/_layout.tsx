import { Stack } from 'expo-router';
import React from 'react';

import { AuthProvider } from '../context/AuthContext';

import {
  MarketplaceProvider,
} from '../context/MarketplaceContext';

import {
  TutorMarketplaceProvider,
} from '../context/TutorMarketplaceContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <MarketplaceProvider>
        <TutorMarketplaceProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </TutorMarketplaceProvider>
      </MarketplaceProvider>
    </AuthProvider>
  );
}