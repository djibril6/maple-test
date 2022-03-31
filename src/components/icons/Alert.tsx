import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type IconProps = {
  color: string;
};
export const AlertIcon: React.FC<SvgProps & IconProps> = ({
  color,
  ...props
}) => (
  <Svg width={16} height={20} viewBox="0 0 16 20" fill="none" {...props}>
    <Path
      d="M15.623 15.29 14.333 14V9c0-3.07-1.64-5.64-4.5-6.32V2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-2.87.68-4.5 3.24-4.5 6.32v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71Zm-3.29-.29h-8V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6Zm-4 5c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2Z"
      fill={color || '#fff'}
    />
  </Svg>
);
