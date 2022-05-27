import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";

export default function ReactTable({ tableData, tableColumns }) {
  tableData = tableData?.sort(
    (a, b) => parseInt(a.toDate) - parseInt(b.toDate)
  );

  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="table-responsive">
      <table
        {...getTableProps()}
        className="table table-striped table-bordered table-sm"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
