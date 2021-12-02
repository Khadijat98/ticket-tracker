import "./App.scss";
import team from "./data/team";
import Employee from "./components/Employee/Employee";

const App = () => {

  return (
    <>
    <div className="app">
    <h1 className="app__title">Ticket Tracker</h1>
    <section>
        <Employee employeesArr={team}/>
    </section>
    </div>
    </>
  )
}

export default App;