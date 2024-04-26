import './App.scss';

const App = () => {
    
    return (
        <>
            <label className="dark-mode">
                <input className="dark-mode__check" type="checkbox"/>
                <span className="dark-mode__sun"><i class='bx bxs-sun'></i></span>
                <span className="dark-mode__moon"><i class='bx bxs-moon'></i></span>
                <span className="dark-mode__toggle"></span>
                <span className="dark-mode__bg"></span>
            </label>
        </>
    )
}

export default App;