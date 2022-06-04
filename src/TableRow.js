const TableRow = ({ item }) => {
  const itemEntries = Object.entries(item);
  return (
    <tr>
      {itemEntries.map(([key, value]) => (
        <td>{JSON.stringify(value)}</td>
      ))}
    </tr>
  );
};

export default TableRow;
