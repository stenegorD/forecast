import React from 'react';
import { useSelector } from 'react-redux';
import CurrentAirPollutionItem from '../CurrentAirPollutionItem/CurrentAirPollutionItem';


function CurrentAirPollutionCard({moreWeatherToday}) {
    const {airPollutionData} = useSelector(store => store.weatherData);

  return (<>
  
    {airPollutionData.map((element)=> <CurrentAirPollutionItem key={element.dt} aqi={element.main.aqi} {...element.components} moreWeatherToday={moreWeatherToday}/>)}
   
    </>
  )
}

export default CurrentAirPollutionCard;