import { PrismaClient } from '@prisma/client';

// components
import { Input, Select } from '../../../src/shared';
// hooks
import useForm from '../../../src/hooks/useForm';

// Serverside props

function CreateStaff({ roles }) {
  // states
  const [email, setEmail] = useForm('');
  const [phone, setPhone] = useForm('');
  const [fullName, setFullName] = useForm('');
  const [role, setRole] = useForm('');
  const [password, setPassword] = useForm('');
  const [passwordConfirm, setPasswordConfirm] = useForm('');

  // render
  return (
    <form>
      <Input
        name="email"
        id="input-email"
        type="text"
        value={email}
        onChange={setEmail}
      />
      <Input
        name="phone"
        id="input-phone"
        type="text"
        value={phone}
        onChange={setPhone}
      />
      <Input
        name="fullName"
        id="input-fullName"
        type="text"
        value={fullName}
        onChange={setFullName}
      />
      <Select name="role" id="input-role" value={role} onChange={setRole}>
        {roles.map(({ name, id }) => (
          <option value="id" key={`role-${id}`}>
            {name}
          </option>
        ))}
      </Select>
      <Input
        name="password"
        id="input-password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Input
        name="passwordConfirm"
        id="input-password-confirm"
        type="password"
        value={passwordConfirm}
        onChange={setPasswordConfirm}
      />
    </form>
  );
}

export default CreateStaff;
