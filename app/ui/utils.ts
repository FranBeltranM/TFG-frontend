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

  return `${years} año${years !== 1 ? 's' : ''} ${months} mes${months !== 1 ? 'es' : ''} ${days} día${days !== 1 ? 's' : ''}`
}
