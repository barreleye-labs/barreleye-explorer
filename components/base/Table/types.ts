type TableSize = 'middle' | 'small' | 'large'

export interface Props {
  dataSource: any[],
  columns: [],
  loading?: boolean,
  size?: TableSize
}
