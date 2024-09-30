export default function ColorList({ colors }) {
    const lis = colors.map(color => <li>{color}</li>)
    
  return (
    <div>
        <p>color list:</p>
        <ul>{lis}</ul>
    </div>
  )
}
