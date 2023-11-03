function ClickEvent() {
    const hello = () => {
        alert("Hello World!");
    };
    const good = () => {
        alert("Life is Good!");
    };
    return (
        <div>
            <h2>Click Event</h2>
            <button onClick={hello}
                    className="btn btn-success">
                Click Hello 1 </button>
            <button onClick={() => hello()}
                    className="btn btn-success">
                Click Hello 2 </button>
            <button
                onClick={() => {
                    hello();
                    good();
                }}
                className="btn btn-success"
            >
                Click Hello 3
            </button>
        </div>
    );
}
export default ClickEvent;