export default function DoubleDice() {
    const dice1 = Math.floor(Math.random()*6+1)
    const dice2= Math.floor(Math.random()*6+1)
    return (
        <>
    <h2>{dice1}</h2>
    <h2>{dice2}</h2>
    </>
    )
}