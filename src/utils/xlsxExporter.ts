import XLSX from "xlsx";
import type { CsvDataRow } from "@/stores/hevyData.ts";

interface Options {
	fileName: string;
	worksheetName: string;
}

export default {
	download(data: CsvDataRow[], options?: Partial<Options>) {
		const fileName = options?.fileName || "workouts.xlsx";
		const worksheetName = options?.worksheetName || '"Data"';

		const worksheet = XLSX.utils.json_to_sheet(data);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);

		XLSX.writeFile(workbook, fileName, { compression: true });
	},
};
