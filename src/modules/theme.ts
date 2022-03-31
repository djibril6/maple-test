import { StyleProp, TextStyle } from 'react-native';

type TextTypes =
  | 'header1'
  | 'header2'
  | 'body1'
  | 'body2'
  | 'placeholder'
  | 'button';
type ColorName =
  | 'primary'
  | 'primary50'
  | 'secondary'
  | 'secondary50'
  | 'warning'
  | 'info'
  | 'black'
  | 'white'
  | 'gray'
  | 'gray50';

type SpaceName = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

const typography: Record<TextTypes, StyleProp<TextStyle>> = {
  header1: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
  },
  header2: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
  },
  body1: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
  },
  body2: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  placeholder: {
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
};

const colors: Record<ColorName, string> = {
  primary: '#b31f30',
  primary50: '#d33749',
  secondary: '#27CFC9',
  secondary50: '#27cfc9bb',
  warning: '#E0952B',
  info: '#8863E0',
  black: '#000',
  white: '#fff',
  gray: 'gray',
  gray50: '#E6E6E6',
};

const spacing: Record<SpaceName, number> = {
  xxs: 5,
  xs: 10,
  s: 20,
  m: 30,
  l: 40,
  xl: 50,
  xxl: 70,
};

export const theme = {
  colors,
  typography,
  spacing,
  radius: 20,
};
