import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

function App(props) {
    const simpleAction = (value) => {
        console.log("value:::", value);
        props.simpleAction(value);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={() => simpleAction(new Date())}>Test redux action</button>
                <pre>{JSON.stringify(props)}</pre>
                <button onClick={() => simpleAction(null)}> Clear </button>
            </header>
        </div>
    );
}
const mapStateToProps = (props) => ({
    ...props,
});
const mapDispatchToProps = (dispatch) => ({
    simpleAction: (payload) => dispatch(simpleAction(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
