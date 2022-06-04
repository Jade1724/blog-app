import Cell from "./Cell";

const TableRow = ({ item }) => {
  const itemEntries = Object.entries(item);
  return (
    <tr>
      {itemEntries.map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

export default TableRow;
