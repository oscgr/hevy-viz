import Papa from 'papaparse';
import {DateTime} from "luxon";

export default {
  parse(content: string) {
    console.time('import')
    const results = Papa.parse(content, {delimiter: ',', header: true}).data.map((item: Record<string, string>) => ({
      ...item, // todo check all possibilities
      start_time: this.parseDateTime(item.start_time),
      end_time: this.parseDateTime(item.end_time),
      weight_kg: this.parseNumber(item.weight_kg),
      rpe: this.parseNumber(item.rpe),
      distance_km: this.parseNumber(item.distance_km),
      duration_seconds: this.parseNumber(item.duration_seconds),
    }))

    console.timeEnd(`import`)
    console.debug(`Import end - ${results.length} rows`)
    return results
  },
  parseDateTime(entry: string): Date | null {
    return DateTime.fromFormat(entry, 'd LLL yyyy, HH:mm').toJSDate()
  },
  parseNumber(entry: string): Number | null {
    return Number(entry)
  }
}
