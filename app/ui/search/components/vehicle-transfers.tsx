// Domain
import { type Vehicle } from '@/app/modules/vehicle/domain/vehicle'

// UI
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react'

// Utils
import { formatDate, getRelativeTimeString } from '@/app/ui/utils'

export const VehicleTransfers = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Card className='rounded-lg drop-shadow-md'>
      <Title className='mb-4 text-center text-2xl font-semibold underline underline-offset-8'>
        Registros de Transferencias
      </Title>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
            <TableHeaderCell>Localidad</TableHeaderCell>
            <TableHeaderCell>Duración como dueño</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody className='text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis'>
          {vehicle.fecha_primera_matriculacion?.at(-1)?.fecha && (
            <TableRow>
              <TableCell>
                {formatDate({
                  date:
                    vehicle.fecha_primera_matriculacion?.at(-1)?.fecha ?? '',
                  format: 'DD MMM. YYYY',
                })}
              </TableCell>
              <TableCell>Extranjero</TableCell>
              <TableCell>
                {vehicle.provincia_matriculacion?.at(-1)?.valor.toUpperCase()}
              </TableCell>
              <TableCell>
                {getRelativeTimeString({
                  startDateString:
                    vehicle.fecha_primera_matriculacion?.at(-1)?.fecha ??
                    vehicle.fecha_matricula?.at(-1)?.fecha ??
                    '',
                  endDateString: vehicle.transferencias[0].fecha_tramite,
                })}
              </TableCell>
            </TableRow>
          )}

          <TableRow>
            <TableCell>
              {formatDate({
                date: vehicle.fecha_matricula?.at(-1)?.fecha ?? '',
                format: 'DD MMM. YYYY',
              })}
            </TableCell>
            <TableCell>Matriculación</TableCell>
            <TableCell>
              {vehicle.provincia_matriculacion?.at(-1)?.valor.toUpperCase()}
            </TableCell>
            <TableCell>
              {getRelativeTimeString({
                startDateString: vehicle.fecha_matricula?.at(-1)?.fecha ?? '',
                endDateString: vehicle.transferencias[0].fecha_tramite,
              })}
            </TableCell>
          </TableRow>

          {vehicle.transferencias.map((transferencia, index) => {
            if (index === vehicle.transferencias.length - 1) {
              return (
                <TableRow key={index}>
                  <TableCell>
                    {formatDate({
                      date: transferencia.fecha_tramite,
                      format: 'DD MMM. YYYY',
                    })}
                  </TableCell>
                  <TableCell>{transferencia.clave_tramite}</TableCell>
                  <TableCell>{transferencia.municipio}</TableCell>
                  <TableCell>
                    {getRelativeTimeString({
                      startDateString: transferencia.fecha_tramite,
                    })}
                  </TableCell>
                </TableRow>
              )
            }

            return (
              <TableRow key={index}>
                <TableCell>
                  {formatDate({
                    date: transferencia.fecha_tramite,
                    format: 'DD MMM. YYYY',
                  })}
                </TableCell>
                <TableCell>{transferencia.clave_tramite}</TableCell>
                <TableCell>{transferencia.municipio}</TableCell>
                <TableCell>
                  {getRelativeTimeString({
                    startDateString: transferencia.fecha_tramite,
                    endDateString:
                      vehicle.transferencias[index + 1].fecha_tramite,
                  })}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}
