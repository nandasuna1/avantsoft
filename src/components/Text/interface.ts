export interface TextInterface  {
    typeScale?: 'small' | 'normal' | 'big' ;
    letterCase?: 'upper' | 'lower' | 'capitalize';
    weight?: 'bold' | 'normal';
    textAlign?: 'left' | 'center' | 'right';
    children?: React.ReactNode;
}
  