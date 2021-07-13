import React, {useContext} from 'react';
import {WeatherContext} from '../../App';
import styles from './Weather.module.css';
import button from '../../css/Buttons.module.css';

export const Weather = (props) => {
    
    const {id, city, feels_like, humidity, pressure, temp, temp_max, temp_min} = props;
    const {handleWeatherDelete} = useContext( WeatherContext )

    return (

        <div className={styles.weatherContainer}>    
            <div className={styles.weatherHeader}>
                <h3 className="col-sm-6 col-md-8 mr-auto py-2 px-3">Miasto: {city}</h3>
                <div>
                    <button onClick={() => handleWeatherDelete(id)} className={`btn ${button.btnDelete}`}>
                        Usuń
                    </button>
                </div>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-8 m-auto py-2 px-4">
                <div className={styles.weatherRow}>
                    <span className={styles.weatherLabel}>Wilgotność: </span>
                    <span className={styles.weatherValue}>{humidity}%</span>
                </div>
                <div className={styles.weatherRow}>
                    <span className={styles.weatherLabel}>Ciśnienie: </span>
                    <span className={styles.weatherValue}>{pressure} hPa</span>
                </div>
                <div className={styles.weatherRow}>
                    <span className={styles.weatherLabel}>Temperatura aktualna: </span>
                    <span className={styles.weatherValue}>{temp} °C</span>
                </div>
                <div className={styles.weatherRow}>
                    <span className={styles.weatherLabel}>Temperatura odczuwalna: </span>
                    <span className={styles.weatherValue}>{feels_like} °C</span>
                </div>
                <div className={styles.weatherRow}>
                    <span className={styles.weatherLabel}>Temperatura maksymalna: </span>
                    <span className={styles.weatherValue}>{temp_max} °C</span>
                </div>
                <div className={styles.weatherRow}>
                    <span className={styles.weatherLabel}>Temperatura minimalna: </span>
                    <span className={styles.weatherValue}>{temp_min} °C</span>
                </div>
            </div>
        </div>
        
    )
}
