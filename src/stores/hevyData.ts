import type { Options } from '@/utils/xlsxExporter.ts'
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import XlsxExporter from '@/utils/xlsxExporter.ts'

export interface CsvDataRow {
  startDateTime: string // ISO datetime
  endDateTime: string // ISO datetime
  title: string
  exerciseTitle: string
  set?: number
  reps?: number
  rpe?: number
  weightInKilograms?: number
  distanceInKilometers?: number
  durationInSeconds?: number
  exerciseNotes?: string
  setType?: 'normal' | 'warmup' | 'dropset' | 'failure'
  superset?: number
}

const _data = useLocalStorage<CsvDataRow[]>('data', [], {})

function useHevyData() {
  const setData = (rows: CsvDataRow[]) => {
    _data.value = rows
  }

  const download = (options?: Partial<Options>) => {
    XlsxExporter.download(_data.value, options)
  }

  return {
    data: computed(() => _data.value),
    setData,
    download,
  }
}

export default useHevyData
