import { useState, useEffect } from 'react';

// hooks
import useForm from '../../hooks/useForm';

// components
import Flex from '../../shared/Flex';
import Text from '../../shared/Text';

// services
import { getCities, getProvices } from './services/region';

function DonationForm() {
  const [phone, setPhone] = useForm('');
  const [name, setName] = useForm('');
  const [email, setEmail] = useForm('');
  const [province, setProvince] = useForm(null);
  const [city, setCity] = useForm(null);
  const [amount, setAmount] = useForm(null);

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  const [isLoading, setLoading] = useState(false);

  // When mount
  useEffect(() => {
    async function onFetchProvinces() {
      setLoading(true);
      const result = await getProvices();
      if (result.list) {
        setProvinces(result.list);
      }
      setLoading(false);
    }

    if (!isLoading) {
      onFetchProvinces();
    }
  }, []);

  // When provice changes
  useEffect(() => {
    async function onFetchCities(provinceId) {
      const result = await getCities(provinceId);
      if (result.list) {
        setCities(result.list);
      }
    }

    if (!isLoading && province) {
      onFetchCities(province);
    }
  }, [province]);

  return (
    <form>
      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Nomor Handphone</Text>
        <input type="text" value={phone} onChange={setPhone} />
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Nama Lengkap</Text>
        <input type="text" value={name} onChange={setName} />
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Alamat Email</Text>
        <input type="email" value={email} onChange={setEmail} />
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Provinsi</Text>
        <select
          name="provinsi"
          value={province}
          onChange={setProvince}
          disabled={isLoading}
        >
          {provinces.map(({ id, nama }) => (
            <option value={id} key={`province-${id}`}>
              {nama}
            </option>
          ))}
        </select>
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Kota / Kabupaten</Text>
        <select
          name="kota"
          value={city}
          onChange={setCity}
          disabled={isLoading || !!!province}
        >
          {cities.map(({ id, nama }) => (
            <option value={id} key={`city-${id}`}>
              {nama}
            </option>
          ))}
        </select>
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Nominal Infaq</Text>
        <input
          type="number"
          value={amount}
          onChange={setAmount}
          placeholder="Nominal infaq minimal Rp.50,000"
        />
      </Flex>
    </form>
  );
}

export default DonationForm;
