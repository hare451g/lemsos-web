import axios from 'axios';

import { REGION_BASE_API_URL } from './constants';

async function getProvinces() {
  try {
    const list = await axios.get(`${REGION_BASE_API_URL}/provinsi`);

    return {
      error: null,
      list: list.data.provinsi,
    };
  } catch (error) {
    return {
      error: `An error occured: ${error}`,
      list: null,
    };
  }
}

export default getProvinces;
