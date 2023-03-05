declare module 'button' {
  import { TouchableOpacityProps } from 'react-native'

  export type ButtonType = {
    children: ReactNode;
    backgroundColor: string;
    borderColor: string;
    borderRadius: number;
    height: number;
    width: number;
 } & TouchableOpacityProps
}
