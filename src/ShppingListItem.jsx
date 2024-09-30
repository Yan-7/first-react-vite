function ShppingListItem (item, amount, completed) {
    <ul>
    {items.map((i, index) => (
        <li style={{
            color: i.completed ? 'grey' : 'green'}}>
        <li key={index}> {i.item} - {i.amount}</li>
        </li>
    ))}
</ul>
}

export default ShppingListItem;