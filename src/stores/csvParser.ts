import {computed} from "vue";
import Papa from 'papaparse';
import {DateTime} from "luxon";

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


const useCsvParser = () => {

  const data = computed(() => _data.value)

  const parse = (content: string): true | string => {
    try {
      _data.value = Papa.parse(content, {delimiter: ',', header: true}).data.map(item => ({
        ...item,
        start_time: parseDateTime(item.start_time),
        end_time: parseDateTime(item.end_time),
        weight_kg: parseNumber(item.weight_kg),
        rpe: parseNumber(item.rpe),
        distance_km: parseNumber(item.distance_km),
        duration_seconds: parseNumber(item.duration_seconds),
      }))
      return true
    } catch (e: any) {
      return 'File could not be parsed.'
    }
  }

  const parseDateTime = (entry: string): Date => {
    return DateTime.fromFormat(entry, 'd LLL yyyy, HH:mm').toJSDate()
  }

  const parseNumber = (entry: string): Date => {
    return Number(entry)
  }

  return {
    data,
    parse,
  }
}

export default useCsvParser
