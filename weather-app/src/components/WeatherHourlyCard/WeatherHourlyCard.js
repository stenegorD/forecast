import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from '@mui/material/Fade';
import Carousel from 'react-multi-carousel';
import WeatherHourlyItem from '../WeatherHourlyItem/WeatherHourlyItem';
import TitleBar from '../TitleBar/TitleBar';
import 'react-multi-carousel/lib/styles.css';

function WeatherHourlyCard() {
  const [hideHourlyWeather, setHideHourlyWeather] = useState(false);
  const { weatherHourly } = useSelector((store) => store.weatherData);
  const handleClickHideHourlyWeather = () => {
    setHideHourlyWeather(!hideHourlyWeather);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 767 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 767, min: 479 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 479, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ maxWidth: '90vw' }}>
      <div>
        <TitleBar title="Hourly forecast for today" more handleClickHideHourlyWeather={handleClickHideHourlyWeather} />
      </div>
      <Fade in={hideHourlyWeather} timeout={500} easing={{ enter: 'ease-in', exit: 'ease-out' }}>
        <div>

          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay={false}
            shouldResetAutoplay={false}
            infinite={false}
            centerMode={false}
            draggable
            focusOnSelect
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            slidesToSlide={1}
            swipeable
            removeArrowOnDeviceType={['tablet']}
          >
            {weatherHourly && weatherHourly.map((element) => (
              <WeatherHourlyItem
                key={element.dt}
                pressure={element.pressure}
                humidity={element.humidity}
                temp={element.temp}
                feels_like={element.feels_like}
                dt={element.dt}
                description={element.weather[0].description}
                icon={element.weather[0].icon}
                wind_speed={element.wind_speed}
                hideHourlyWeather={hideHourlyWeather}
              />
            ))}
          </Carousel>
        </div>
      </Fade>
    </div>
  );
}

export default React.memo(WeatherHourlyCard);
