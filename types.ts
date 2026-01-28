import React from 'react';

export type PageType = 'home' | 'services' | 'rates' | 'drivers';

export interface NavItem {
  id: PageType;
  label: string;
}

export interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description?: string;
}
