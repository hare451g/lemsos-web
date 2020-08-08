import { useState, useEffect } from 'react';

// hooks
import useForm from '../../hooks/useForm';

// components
import Button from '../../shared/Button';
import Flex from '../../shared/Flex';
import Input from '../../shared/Input';
import Option from '../../shared/Option';
import Select from '../../shared/Select';
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
        <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Nomor Handphone
        </Text>
        <Input
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="Nomor HP Aktif cth: 0812 3456 7863"
          autoComplete="tel"
          required
        />
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Nama Lengkap
        </Text>
        <Flex alignItems="center">
          <Select
            name="gender"
            value={gender}
            onChange={setGender}
            placeholder="Bapak / Ibu"
            required
          >
            <Option value="Pria">Bapak</Option>
            <Option value="Wanita">Ibu</Option>
          </Select>
          <Input
            type="name"
            value={name}
            onChange={setName}
            placeholder="Isi dengan nama lengkap anda"
            width="100%"
            ml="1rem"
            autoComplete="name"
            required
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Alamat Email
        </Text>
        <Input
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          placeholder="Isi dengan alamat email Anda"
          required
        />
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Provinsi
        </Text>
        <Select
          name="provinsi"
          value={province}
          onChange={setProvince}
          disabled={isLoading}
          required
        >
          {provinces.map(({ id, nama }) => (
            <Option value={id} key={`province-${id}`}>
              {nama}
            </Option>
          ))}
        </Select>
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Kota / Kabupaten
        </Text>
        <Select
          name="kota"
          value={city}
          onChange={setCity}
          disabled={isLoading || !!!province}
          required
        >
          {cities.map(({ id, nama }) => (
            <Option value={id} key={`city-${id}`}>
              {nama}
            </Option>
          ))}
        </Select>
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Tipe Donasi
        </Text>
        <Select
          name="donationType"
          value={donationType}
          onChange={setDonationType}
          required
        >
          {DONATION_TYPES.map(({ id, label }) => (
            <Option value={id} key={`city-${id}`}>
              {label}
            </Option>
          ))}
        </Select>
      </Flex>

      <Flex flexDirection="column" mb="1rem">
        <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Nominal Infaq
        </Text>
        <Input
          type="number"
          value={amount}
          onChange={setAmount}
          placeholder="Nominal infaq minimal Rp.50,000"
          required
        />
      </Flex>

      <Flex>
        <Button type="outline" color="primary" block>
          Lanjutkan
        </Button>
      </Flex>
    </form>
  );
}

export default DonationForm;
