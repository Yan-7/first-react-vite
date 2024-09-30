export default function DoubleDice() {
  const dice1 = Math.floor(Math.random() * 6 + 1);
  const dice2 = Math.floor(Math.random() * 6 + 1);
  const styles = {color: dice1 === dice2 ? "green" : 'red', fontSize: '20px'};
  return (
    <div className="DoubleDice" style={styles}>
      <h2>
        {dice1} : {dice2}
      </h2>
      <h2>{dice1 === dice2 && <h3>YOU WIN </h3>} </h2>
    </div>
  );
}
