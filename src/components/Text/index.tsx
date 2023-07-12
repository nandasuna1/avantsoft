import React from 'react';
import { TextComponent } from './styles';
import { TextInterface } from './interface';

export default function Text(props:  TextInterface) {
  const { children, typeScale = 'normal', weight = 'normal', ...rest } = props;
  return <TextComponent weight={weight} typeScale={typeScale} {...rest} >{children}</TextComponent>;
}
