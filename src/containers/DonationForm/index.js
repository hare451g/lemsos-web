import { useState, useEffect } from 'react';

// hooks
import useForm from '../../hooks/useForm';

// components
import Flex from '../../shared/Flex';
import Text from '../../shared/Text';

// services
import { getCities, getProvices } from './services/region';

// constants
import { DONATION_TYPES } from './constants';

function DonationForm() {
  // form states
  const [phone, setPhone] = useForm('');
  const [name, setName] = useForm('');
  const [gender, setGender] = useForm('');
  const [email, setEmail] = useForm('');
  const [province, setProvince] = useForm(null);
  const [city, setCity] = useForm(null);
  const [amount, setAmount] = useForm(null);
  const [donationType, setDonationType] = useForm(null);

  // region service state
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  // region loading state
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

  function handleSubmit(e) {
    e.preventDefault();

    const form = {
      phone,
      name,
      gender,
      email,
      province,
      city,
      amount,
      donationType,
    };

    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Nomor Handphone</Text>
        <input
          type="text"
          value={phone}
          onChange={setPhone}
          placeholder="Nomor HP Aktif cth: 0812 3456 7863"
        />
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Nama Lengkap</Text>
        <Flex alignItems="center">
          <select
            name="gender"
            value={gender}
            onChange={setGender}
            placeholder="Bapak / Ibu"
          >
            <option value="Pria">Bapak</option>
            <option value="Wanita">Ibu</option>
          </select>
          <input
            type="name"
            value={name}
            onChange={setName}
            placeholder="Isi dengan nama lengkap anda"
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label">Alamat Email</Text>
        <input
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Isi dengan alamat email Anda"
        />
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
        <Text as="label">Tipe Donasi</Text>
        <select
          name="donationType"
          value={donationType}
          onChange={setDonationType}
        >
          {DONATION_TYPES.map(({ id, label }) => (
            <option value={id} key={`city-${id}`}>
              {label}
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

      <Flex>
        <button>Lanjutkan</button>
      </Flex>
    </form>
  );
}

export default DonationForm;
