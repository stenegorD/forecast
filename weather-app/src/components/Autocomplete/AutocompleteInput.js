import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { useDispatch } from 'react-redux';
import { getCurrentWeatherForCoord } from '../../store/weatherDataActionCreator';

function AutocompleteInput({setCity}) {
	
	const dispatch = useDispatch();
	
	return (
		<div style={{opacity:0.9, color: "#000000"}}>
			{/* {error && <ErrorMessageComponent/>} */}
			<div style={{width:"350px"}}>
				<AlgoliaPlaces
					onInput={(input)=>{setCity(input.target.value)}}
					placeholder='Write a city here'
					onChange={({suggestion}) => {dispatch(getCurrentWeatherForCoord(suggestion.latlng.lat, suggestion.latlng.lng))}}
					options={{
						apiId:process.env.REACT_APP_ALGOLIA_ID, 
						apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,  
						language: ['en', 'ru', 'ua'], 
						type:['city'],
						templates: {
							suggestion: function(suggestion) {
							  return `${suggestion.name}, ${suggestion.administrative === undefined ? suggestion.county : suggestion.administrative}, ${suggestion.country}`
							},
							value: function(value) {
								return `${value.name}, ${value.administrative === undefined ? value.county : value.administrative}, ${value.country}`
							  }
						},
							
					}}
						style={{backgroundColor: "#000000",
							color: "#FFFFFF",
							opacity: 0.4,
						}}
				/>
			</div>
		</div>
	);
}

export default React.memo(AutocompleteInput);