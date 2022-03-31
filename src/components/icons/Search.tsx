import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type IconProps = {
  color: string;
};
export const SearchIcon: React.FC<SvgProps & IconProps> = ({
  color,
  ...props
}) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <Path
      d="M12.5 11h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34C3.09-.47-.46 3.09.05 7.32c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.26 4.25c.41.41 1.07.41 1.48 0l.01-.01c.41-.41.41-1.07 0-1.48L12.5 11Zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11Z"
      fill={color || '#fff'}
    />
  </Svg>
);
