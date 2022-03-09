import httpClient from '@holie/utils/http-client.util';

const API_BASE = 'https://api.m3o.com/v1/holidays';

export const fetchCountriesList = async () => {
  const res = await httpClient({
    url: `${API_BASE}/Countries`,
    method: 'GET',
  });

  return res;
};

export const fetchHolidaysByCountryCode = async (body: {
  country_code: string;
  year: number;
}) => {
  const res = await httpClient({
    url: `${API_BASE}/List`,
    method: 'POST',
    body,
  });

  return res;
};
