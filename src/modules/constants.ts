import React from 'react';
import { HomeScreen } from '../screens';
import { EScreen } from '../types';

type Route = {
  name: EScreen;
  component: React.ComponentType<any>;
  icon: React.Component | null;
};

export const TAB_ROUTES: Route[] = [
  { name: EScreen.HOME, component: HomeScreen, icon: null },
  { name: EScreen.MY_MAPLE, component: HomeScreen, icon: null },
  { name: EScreen.STORES, component: HomeScreen, icon: null },
  { name: EScreen.ANALYTICS, component: HomeScreen, icon: null },
];
