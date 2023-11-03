function ChildStateComponent({ counter, setCounter }) {
    return (
        <div>
            <h3>Counter {counter}</h3>
            <button onClick={() => setCounter(counter + 1)}
                    className="btn btn-success">
                Increment</button>
            <button onClick={() => setCounter(counter - 1)}
                    className="btn btn-danger">
                Decrement</button>
        </div>
    );
}
export default ChildStateComponent;

