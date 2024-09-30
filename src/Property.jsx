

export default function Property({name, rating, price, id}) {
    return(
        <div>
        <h2>{name}</h2>
        <h3>{rating} stars</h3>
        <h3>${price} </h3>
        </div>
    );
}