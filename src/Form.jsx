function handleFormSubmit(e) {
    e.preve
    console.log('form submited');
    
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>submit</button>
        </form>
    );
}