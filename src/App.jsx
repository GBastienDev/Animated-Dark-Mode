import './App.scss';
import { Moon } from 'react-ionicons';
import { Sunny } from 'react-ionicons';
import { useState } from 'react';

const App = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleChecked = () => {
        setIsChecked(prevState => !prevState);
    }

    return (
        <>
            <label className="dark-mode">
                <input className="dark-mode__check" type="checkbox" checked={isChecked} onChange={toggleChecked} />
                <div>
                {isChecked ? (
                            <Sunny
                                color={'#666'}
                                title={'sun'}
                                width={'48px'}
                                height={'48px'}
                            />
                    ) : (
                            <Moon
                                color={'#666'}
                                title={'moon'}
                                width={'48px'}
                                height={'48px'}
                            />
                    )}
                </div>
                <span className="dark-mode__toggle"></span>
                <span className="dark-mode__bg"></span>
            </label>
        </>
    )
}

export default App;