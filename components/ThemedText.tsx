import { Text as TextNative, type TextProps, StyleSheet, TextStyle } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

interface ThemedTextProps {
  children: React.ReactNode
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

interface Styles {
  default: TextStyle;
  defaultSemiBold: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export function Text({type = 'default', children}: ThemedTextProps) {
  const theme = useThemeColor();

  const styles: Styles = {
    default: {
      fontSize: 16,
      lineHeight: 24,
      color: theme.textColorSecondary,
      textAlign: "center"
    },
    defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      color: theme.textColorSecondary
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      lineHeight: 32,
      color: theme.textColorPrimary
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.textColorSecondary
    },
  }

  return (
    <TextNative style={{...styles[type]}}>
      {children}
    </TextNative>
  );
}


