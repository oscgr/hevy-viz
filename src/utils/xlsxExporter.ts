import XLSX from "xlsx";

interface Options {
  fileName: string;
  worksheetName: string;
}

export default {
  download(data: any[], options?: Partial<Options>) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "workouts.xlsx", {compression: true});
  }
}
