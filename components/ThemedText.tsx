import { Text as TextNative, type TextProps, StyleSheet, TextStyle } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

interface ThemedTextProps {
  children: React.ReactNode
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'error';
};

interface Styles {
  default: TextStyle;
  defaultSemiBold: TextStyle;
  title: TextStyle;
  subtitle: TextStyle
  error: TextStyle
}

export function Text({type = 'default', children}: ThemedTextProps) {
  const theme = useThemeColor();

  const styles: Styles = {
    error: {
      fontSize: 16,
      lineHeight: 24,
      color: theme.error,
      textAlign: "center"
    },
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
      color: theme.textColorPrimary
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


