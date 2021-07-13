// import React, {useState, useContext} from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// import {WeatherContext} from "../App";

// import {countries} from './Countries';

// function countryToFlag(isoCode) {
//     return typeof String.fromCodePoint !== 'undefined'
//       ? isoCode
//           .toUpperCase()
//           .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
//       : isoCode;
//   }


// export const Search = () => {
//     const {handleWeatherAdd} = useContext( WeatherContext);
//     const [address, setAddress] = useState("");

//     const handleChange = (city) =>
//     {
//         handleWeatherAdd(city, weather)
//     }
    
//     const handleSelect = async (value) => {

//     }
//     return (
//         <>
        
        
//         <PlacesAutocomplete value={address} onChange={setAddress()} onSelect={handleSelect}>
        
//             {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
//                 <div>
//                     <input {...getInputProps({ placeholder: "Wpisz adres"})} />
//                     <div>
//                         {loading ? <div>ładuje...</div> : null }
//                         {suggestions.map(suggestion => {
//                             return <div>{suggestion.description}</div>

//                         })}

//                     </div>
//                 </div> 
                
//             )}

//         </PlacesAutocomplete>
//         <button onClick={e => handleChange({city: e.target.value})}} className="btn btn--primary ">Dodaj</button>
        
//         {/* <div>
//             <label className="weather-edit__label" htmlFor="name">Nazwa</label>
//             <input className="weather-edit__input" value={weather.city} onChange={e => handleChange({city: e.target.value})} type="text" name="city" id="city" />
//         </div> */}
//         </>
//     )
// }
