export function getRoutePathSplit (splitIndex: number = 2) {
  const route = useRoute()
  return route.path.split('/')[splitIndex]?.toUpperCase()
}
