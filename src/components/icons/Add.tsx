import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type IconProps = {
  color: string;
};
export const AddIcon: React.FC<SvgProps & IconProps> = ({
  color,
  ...props
}) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M13 8H8v5c0 .55-.45 1-1 1s-1-.45-1-1V8H1c-.55 0-1-.45-1-1s.45-1 1-1h5V1c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1Z"
      fill={color || '#fff'}
    />
  </Svg>
);
