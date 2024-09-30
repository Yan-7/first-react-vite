export default function ListPicker({values}) {
    const element = Math.floor(Math.random()* values.length)
    const randElement = values[element]
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>element is: {randElement}</p>
        </div>
    )
}