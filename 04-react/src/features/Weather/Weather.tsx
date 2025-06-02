import { useEffect, useState, type FormEvent } from 'react';
import type { WeatherData } from './types';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=1d260c5f4897b555ae217809965ad963`;

function degKtoC(degK: number) {
  return (degK - 273.15).toFixed(1);
}

async function handleFetchResponse(res: Response) {
  if (!res.ok) {
    if (res.status === 404) {
      const { message } = await res.json();
      throw new Error(message);
    }

    throw new Error('Please try again later');
  }

  return res.json();
}

function getWeatherDataByLocation({
  city,
  countryCode,
}: {
  city: string;
  countryCode: string;
}): Promise<WeatherData> {
  return fetch(`${apiUrl}&q=${city},${countryCode}`).then(handleFetchResponse);
}

function getWeatherDataByCoords(
  coords: GeolocationCoordinates
): Promise<WeatherData> {
  return fetch(`${apiUrl}&lat=${coords.latitude}&lon=${coords.longitude}`).then(
    handleFetchResponse
  );
}

const initialSearchValues = {
  city: 'Brasov',
  countryCode: 'RO',
};

export function Weather() {
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);
  const [coords, setCoords] = useState<null | GeolocationCoordinates>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      handleLocationSuccess,
      console.warn
    );

    function handleLocationSuccess({
      coords,
    }: {
      coords: GeolocationCoordinates;
    }) {
      setCoords(coords);
    }
  }, []);

  useEffect(() => {
    async function load() {
      let data;
      try {
        if (coords) {
          data = await getWeatherDataByCoords(coords);
        } else {
          data = await getWeatherDataByLocation(initialSearchValues);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }

        console.warn(e);
      }

      if (data) {
        setWeatherData(data);
      }
    }

    load();
  }, [coords]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const city = data.get('city');
    const countryCode = data.get('countryCode');

    if (typeof city !== 'string' || typeof countryCode !== 'string') {
      return;
    }
    try {
      const data = await getWeatherDataByLocation({
        city,
        countryCode,
      });

      setWeatherData(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  }

  return (
    <>
      <h1>Weather</h1>
      {error && <p style={{ color: '#c00' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={initialSearchValues.city}
          />
        </div>

        <div>
          <label htmlFor="countryCode">Country</label>
          <select
            id="countryCode"
            name="countryCode"
            defaultValue={initialSearchValues.countryCode}
          >
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
