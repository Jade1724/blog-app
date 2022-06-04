const TableRow = ({ item }) => {
  const itemEntries = Object.entries(item);
  return (
    <tr>
      {itemEntries.map(([key, value]) =>
        typeof value === "object" ? (
          <td>{JSON.stringify(value)}</td>
        ) : (
          <td>{value}</td>
        )
      )}
    </tr>
  );
};

export default TableRow;
