import React from "react"
import { Button } from "antd"
import { read, writeFileXLSX } from "xlsx";

const ExcelImporter = ({ data }: { data: Record<string, any>[] }) => {

    function exportHandler() {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

        /* fix headers */
        // XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });

        /* calculate column width */
        // const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
        // worksheet["!cols"] = [{ wch: max_width }];

        /* create an XLSX file and try to save to Presidents.xlsx */
        XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });
    }

    return <Button onClick={exportHandler}>Экспорт в Excel</Button>
}

export default ExcelImporter;