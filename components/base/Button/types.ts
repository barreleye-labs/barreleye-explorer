import { ButtonSize, ButtonType } from 'ant-design-vue/es/button'

export interface Props {
  loading?: boolean,
  size?: ButtonSize,
  type?: ButtonType,
}

export interface Emits {
  (e: 'click') : void
}
