const Comments = ({items}) => {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{JSON.stringify(items)}</li>)}
    </ul>
  )
}

export default Comments