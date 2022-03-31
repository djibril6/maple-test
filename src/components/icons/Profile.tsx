import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type IconProps = {
  color: string;
};
export const ProfileIcon: React.FC<SvgProps & IconProps> = ({
  color,
  ...props
}) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 1.9a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H1.9V13c0-.64 3.13-2.1 6.1-2.1ZM8 0C5.79 0 4 1.79 4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4Z"
      fill={color || '#fff'}
    />
  </Svg>
);
