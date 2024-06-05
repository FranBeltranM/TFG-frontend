export const defaultTab = ({ params }: { params: Record<string, string> }) => {
  const { filter, province, dateFrom, dateTo } = params

  const filtersRoutes: Record<string, number> = {
    stolen: 2,
    seized: 3,
  }

  if (filter !== undefined) return filtersRoutes[filter] || 0
  if (dateFrom !== undefined && dateTo !== undefined) return 1
  if (province !== undefined) return 0

  return 0
}
