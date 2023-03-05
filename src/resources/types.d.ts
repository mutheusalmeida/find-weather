declare module 'components-types' {
  import { TouchableOpacityProps } from 'react-native'

  export type ButtonType = {
    children: ReactNode;
    backgroundColor: string;
    borderColor: string;
    borderRadius: number;
    height: number;
    width: number;
 } & TouchableOpacityProps

  export type TextType = {
    color: string,
    font: string,
    fontSize: number,
    lineHeight: number,
    children: ReactNode,
  } & Component
}
