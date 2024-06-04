export interface VehicleBrandModel {
  marca: string
  modelo: string
}

export interface VehicleTechnicalData {
  id: string
  cilindrada_itv: number
  potencia_itv: number
  tara: number
  peso_maximo: number
  numero_plazas: number
  numero_plazas_maximo: number
  kw_itv: number
  co2_itv: number
  tipo_itv: string
  variante_itv: string
  version_itv: string
  fabricante_itv: string
  masa_maxima_tecnica_admisible_itv: number
  categoria_homologacion_europea_itv: string
  nivel_emisiones_euro_itv: string
  consumo_wh_km_itv: number
  clasificacion_reglamento_vehiculos_itv: string
  categoria_vehiculo_electrico: string
  autonomia_vehiculo_electrico: number
  marca_vehiculo_base: string
  fabricante_vehiculo_base: string
  tipo_vehiculo_base: string
  version_vehiculo_base: string
  contrasena_homologacion_itv: string
}

export interface Vehicle {
  bastidor_itv: string
  propulsion_itv: Array<{
    fecha: string
    valor: string
  }>
  fecha_matricula: Array<{
    fecha: string
  }>
  localidad_vehiculo: Array<{
    fecha: string
    valor: string
  }>
  numero_titulares: Array<{
    fecha: string
    valor: number
  }>
  numero_transmisiones: Array<{
    fecha: string
    valor: number
  }>
  id: string
  clase_matricula: Array<{
    fecha: string
    valor: string
  }>
  procedencia_itv: Array<{
    fecha: string
    valor: string
  }>
  transferencias: Array<{
    clave_tramite: string
    codigo_postal: number
    municipio: string
    fecha_tramitacion: string
    fecha_tramite: string
  }>
  municipio_ine_vehiculo: Array<{
    fecha: string
    valor: number
  }>
  provincia_matriculacion: Array<{
    fecha: string
    valor: string
  }>
  provincia_vehiculo: Array<{
    fecha: string
    valor: string
  }>
  fecha_primera_matriculacion: null | Array<{
    fecha: string
  }>
  codigo_tipo: Array<{
    fecha: string
    valor: string
  }>
  codigo_itv: Array<{
    fecha: string
    valor: string
  }>
  servicio: Array<{
    fecha: string
    valor: string
  }>
  indicadores: Array<{
    precinto: null
    embargo: null
    baja_definitiva: null
    baja_temporal: null
    sustraccion: null
    baja_telematica: null
    nuevo_usado: string
    persona_fisica_juridica: string
    renting: boolean
    tutela: null
    fecha: string
  }>
}

export interface VehicleObject {
  brand_model: VehicleBrandModel
  technical_data: VehicleTechnicalData
  vehicle: Vehicle
}

export interface VehicleFilteredByProvince {
  bastidor_itv: string
  fecha_matricula: Array<{
    fecha: string
  }>
}

export interface VehicleFilteredByProvinceObject {
  results: VehicleFilteredByProvince[]
  total: number
  page: number
  totalPages: number
}
