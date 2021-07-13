import React, {useState, useContext} from 'react';
import { Weather } from '../Weather/Weather';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {WeatherContext} from '../../App';
import styles from './WeatherList.module.css';
import button from '../../css/Buttons.module.css';


export const WeatherList = ( {weathers, err} ) => {
    const {handleWeatherAdd} = useContext( WeatherContext);
    const [address, setAddress] = useState("");
    const [coords, setCoords] = useState({lat: null, lng: null});
    
    const handleSelect = async (value) => {
        const result = await geocodeByAddress(value)
        const latLng = await getLatLng(result[0]);
        setAddress(value);
        setCoords(latLng);
    }
    
    const handleCityAdd = () => {
        handleWeatherAdd(address)
        setAddress("")    
    }

    return (
        <div className="weatherContianer">
            <div className="weatherList">
                <div>
                    <div className={styles.weatherSearch}>
                        <div className="col-sm-6 col-md-8 mr-auto py-2 px-3">   
                            <div className="input-group-append cursor-pointer" >
                                <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                                
                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                        <div>
                                            <input className="form-control me-2" {...getInputProps({ placeholder: "Wpisz adres"})} />
                                            
                                            <div>
                                                {loading ? <div>ładuje...</div> : null }
                                                {suggestions.map(suggestion => {
                                                    return <div {...getSuggestionItemProps(suggestion, {})}>{suggestion.description}</div>

                                                })}

                                            </div>
                                        </div> 
                                        
                                    )}

                                </PlacesAutocomplete>
                                
                            </div>
                        </div>      
                        <button onClick={handleCityAdd} className={`btn ${button.btnPrimary} ${styles.weatherListBtnContainer} btn-outline-success`} >Dodaj</button>    
                    </div>
                    
                    <div className="text-center py-3">{err && <strong>Nieznaleziono takiego miasta :(</strong>}</div>
                    
                    {weathers.map(weather => {
                    return  (
                        <Weather 
                        key={weather.id} 
                        {...weather}
                        /> 
                    )
                    })}
                </div>          
            </div>
        </div>
        
    )
}
