import type { CsvDataRow } from '@/stores/hevyData.ts'
import { DateTime } from 'luxon'
import Papa from 'papaparse'

interface RawImportRow {
  title: string
  exercise_title: string
  start_time: string
  end_time: string
  weight_kg?: string
  reps?: string
  rpe?: string
  distance_km?: string
  duration_seconds?: string
  exercise_notes?: string
  set_type?: 'normal' | 'warmup' | 'dropset' | 'failure'
  set_index?: string
  superset_id?: string
}

export default {
  parse(content: string) {
    console.time('Import duration')
    const raw = Papa.parse<RawImportRow>(content, {
      delimiter: ',',
      header: true,
    }).data
    console.debug('parsing file with rows', raw)

    const results = raw.map(
      item =>
        ({
          // ...item, // todo check all possibilities
          startDateTime: this.parseDateTime(item.start_time),
          endDateTime: this.parseDateTime(item.end_time),
          weightInKilograms: this.parseNumber(item.weight_kg),
          rpe: this.parseNumber(item.rpe),
          set: this.parseNumber(item.set_index),
          reps: this.parseNumber(item.reps),
          distanceInKilometers: this.parseNumber(item.distance_km),
          durationInSeconds: this.parseNumber(item.duration_seconds),
          title: this.parseString(item.title),
          exerciseTitle: this.parseString(item.exercise_title),
          exerciseNotes: this.parseString(item.exercise_notes),
          setType: this.parseString(item.set_type),
          superset: this.parseNumber(item.superset_id),
        }) satisfies CsvDataRow,
    )
    console.timeEnd('Import duration')
    console.debug(`Import finished - ${results.length} rows`)
    console.debug('results', results)
    return results
  },
  parseDateTime(entry: string) {
    if (!entry || entry === '')
      throw new Error('Invalid date time - empty string')
    const dt = DateTime.fromFormat(entry, 'd LLL yyyy, HH:mm').toISO()
    if (!dt)
      throw new Error(`Invalid date time - tried to parse "${entry}" as "d LLL yyyy, HH:mm`)

    return dt
  },
  parseString<T extends string | undefined>(entry: T): T {
    if (!entry || entry === '')
      return
    return entry
  },
  parseNumber(entry?: string): number | undefined {
    if (!entry || entry === '')
      return
    return Number(entry)
  },
}
