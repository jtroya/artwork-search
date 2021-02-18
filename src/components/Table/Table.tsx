import React from 'react';

import { CollectionResponseProps } from '../../api';

interface TableProps<T> {
  title?: string;
  headers: Array<{
    name: string;
  }>;
  data: T;
}

export const Table: React.FC<TableProps<CollectionResponseProps>> = ({
  headers,
  data,
  title,
}) => {
  return (
    <table className="w-full table-fixed border-collapse border-green-800">
      <caption>
        <h3 className="text-left pb-2">{title}</h3>
      </caption>
      <thead>
        <tr className="border bg-gray-200 border-gray-400">
          {headers.map((title, id) => (
            <th key={id} className="w-1/4 text-left px-2 py-2 text-sm">
              {title.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.artObjects.map((row, index) => (
          <tr
            key={index}
            className="border border-gray-400 hover:bg-blue-400 hover:bg-opacity-50 cursor-default"
          >
            <td className="px-2 py-2 align-top text-sm">{row.title}</td>
            <td className="px-2 py-2 align-top text-sm">
              {row.principalOrFirstMaker}
            </td>
            <td className="px-2 py-2 align-top text-sm">{row.longTitle}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={headers.length} className="text-right px-2 py-2 text-sm">
            Total results: {data.count}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
