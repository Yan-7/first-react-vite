function Slots() {
    const slot1 = Math.floor(Math.random() * 3 + 1);
    const slot2 = Math.floor(Math.random() * 3 + 1);
    const slot3 = Math.floor(Math.random() * 3 + 1);
    const styles = {color: slot1 === slot2 && slot2 === slot3 ? "green" : "red"}

    return (
        <div style={styles}> 
            <p>{slot1} {slot2} {slot3}</p>
            {slot1 === slot2 && slot2 === slot3 && (
                <h2>You win!</h2>
            )}
        </div>
    );
}

export default Slots;
