import { useEffect, useState, type FormEvent } from 'react';
import type { WeatherData } from './types';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=1d260c5f4897b555ae217809965ad963`;

function degKtoC(degK: number) {
  return (degK - 273.15).toFixed(1);
}

export function Weather() {
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);
  const [searchValues, setSearchValues] = useState({
    city: 'Brasov',
    countryCode: 'RO',
  });

  useEffect(() => {
    async function getWeatherData() {
      const data = await fetch(`${apiUrl}&q=${searchValues.city},${searchValues.countryCode}`).then((res) => res.json());
      setWeatherData(data);
    }

    getWeatherData();
  }, [searchValues]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const city = data.get('city');
    const countryCode = data.get('countryCode');

    if(typeof city !== 'string' || typeof countryCode !== 'string') {
      return;
    }

    setSearchValues({
      city,
      countryCode
    });
  }

  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" defaultValue={searchValues.city} />
        </div>

        <div>
          <label htmlFor="countryCode">Country</label>
          <select id="countryCode" name="countryCode" defaultValue={searchValues.countryCode}>
            <option value="US">USA</option>
            <option value="RO">Romania</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <button type="submit">Search</button>
      </form>
      {!weatherData && <strong>Loading ...</strong>}
      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            width="60"
            alt={weatherData.weather[0].description}
          />
          <p>
            The weather in {weatherData.name} is{' '}
            {weatherData.weather[0].description}.
          </p>
          <p>Current Temperature: {degKtoC(weatherData.main.temp)}&deg; C</p>
        </>
      )}
    </>
  );
}
