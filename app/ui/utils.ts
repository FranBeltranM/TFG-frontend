import dayjs from 'dayjs'
import 'dayjs/locale/es' // carga bajo demanda
import updateLocale from 'dayjs/plugin/updateLocale'

export const formatDate = ({
  date,
  format,
}: {
  date: string | null
  format:
    | 'DD/MM/YYYY HH:mm'
    | 'YYYY-MM-DD HH:mm'
    | 'DD/MM/YYYY'
    | 'YYYY-MM-DD'
    | 'YYYY-MM-DDTHH:mm'
    | 'DD MMM. YYYY'
}) => {
  if (!date) return 'N/A'

  dayjs.locale('es')
  dayjs.extend(updateLocale)

  dayjs.updateLocale('es', {
    months: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthsShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    weekdays: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
  })

  return dayjs(date).format(format)
}

export const getRelativeTimeString = ({
  startDateString,
  endDateString = new Date().toISOString(),
}: {
  startDateString: string
  endDateString?: string
}) => {
  const startDate = new Date(startDateString)
  const endDate = new Date(endDateString)

  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()
  let days = endDate.getDate() - startDate.getDate()

  // Ajuste de meses y años si es necesario
  if (days < 0) {
    months -= 1
    const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0)
    days += previousMonth.getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  const yearsText = years > 0 ? `${years} año${years !== 1 ? 's' : ''}` : ''
  const monthsText =
    months > 0 ? `${months} mes${months !== 1 ? 'es' : ''}` : ''
  const daysText = days > 0 ? `${days} día${days !== 1 ? 's' : ''}` : ''

  return `${yearsText} ${monthsText} ${daysText}`
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages]
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ]
}
