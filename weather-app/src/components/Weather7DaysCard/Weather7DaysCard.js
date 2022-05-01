import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TitleBar from '../TitleBar/TitleBar';
import Weather7DaysItem from '../Weather7DaysItem/Weather7DaysItem';

function Weather7DaysCard() {
  const dispatch = useDispatch();
  const {weatherForWeek} = useSelector(store => store.weatherData);



  return (<>
        <TitleBar title={"7 days weather forecast"}></TitleBar>
            { weatherForWeek.map((element)=> <Weather7DaysItem key={element.dt} humidity={element.humidity} 
            tempDay={element.temp.day}
            pressure={element.pressure}
            uvi={element.uvi}
            dt={element.dt}
            />
        )}
  </>
    
  )
}

export default Weather7DaysCard;