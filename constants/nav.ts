import { h } from 'vue'
import {
  BlockOutlined,
  BranchesOutlined,
  SafetyCertificateOutlined,
  KeyOutlined
} from '@ant-design/icons-vue'

export const navItems = [
  {
    key: 'blocks',
    label: 'BLOCKS',
    icon: () => h(BlockOutlined)
  },
  {
    key: 'transactions',
    label: 'TRANSACTIONS',
    icon: () => h(BranchesOutlined)
  },
  {
    key: 'tokens',
    label: 'TOKENS',
    icon: () => h(KeyOutlined)
  },
  {
    key: 'nfts',
    label: 'NFTS',
    icon: () => h(SafetyCertificateOutlined)
  }
] as const
