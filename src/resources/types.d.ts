declare module 'components-types' {
  import { TextProps, TouchableOpacityProps } from 'react-native'

  export type ButtonType = {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    height?: number;
    width?: number;
 } & TouchableOpacityProps

  export type TextType = {
    color?: string,
    fontFamily?: string,
    fontSize?: number,
    lineHeight?: number,
  } & TextProps

}
