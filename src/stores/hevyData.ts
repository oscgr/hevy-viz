import {computed, ref} from "vue";

export interface CsvDataRow {
  start_time: Date
  end_date: Date
  title: string
  exercise_title: string
  set_index?: number
  reps?: number
  rpe?: number
  weight_kg?: number
  distance_km?: number
  duration_seconds?: number
}

const _data = ref<CsvDataRow[]>([])

const useHevyData = () => {

  const setData = (rows: CsvDataRow[]) => {
    _data.value = rows
  }
  return {
    data: computed(() => _data.value),
    setData,
  }
}

export default useHevyData
