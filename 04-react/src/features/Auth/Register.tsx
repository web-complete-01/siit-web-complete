import { useState } from 'react';
import { z, type ZodObject } from 'zod/v4';
import { useAuthContext } from './AuthContext';
import type { AuthResponse } from './types';

const validationSchema = z
  .object({
    email: z.email('Please enter a valid email address.'),
    password: z
      .string()
      .min(6, 'Your password should be at least 6 characters long.'),
    retypePassword: z
      .string()
      .min(6, 'Your password should be at least 6 characters long.'),
    firstName: z.string().min(1, 'Please tell us your first name.'),
    lastName: z.string().min(1, 'Please tell us your last name.'),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: 'The passwords did not match.',
    path: ['retypePassword'],
  });

function validateForm<T extends ZodObject>(
  formValues: Record<string, FormDataEntryValue>,
  validationSchema: T
) {
  const result = validationSchema.safeParse(formValues);

  if (result.error) {
    return z.flattenError(result.error).fieldErrors;
  }
  return null;
}

type SchemaObject = z.infer<typeof validationSchema>;
type ErrorObject = Record<keyof SchemaObject, string[]>;
type Errors = Partial<ErrorObject>;

const initialDefaultValues = {
  email: '',
  password: '',
  retypePassword: '',
  firstName: '',
  lastName: '',
};

export function Register() {
  const [errors, setErrors] = useState<null | Errors>(null);
  const [defaultValues, setDefaultValues] = useState(initialDefaultValues);

  const { login } = useAuthContext();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!errors) {
      return;
    }
    const formValues = new FormData(e.target.form!);
    const newErrors = validateForm(
      Object.fromEntries(formValues.entries()),
      validationSchema
    );
    // setErrors({...errors, [e.target.name]: null});
    setErrors(newErrors);
  }

  async function handleRegister(formData: FormData) {
    const values = Object.fromEntries(formData.entries());
    const errors = validateForm(values, validationSchema);

    if (errors) {
      setErrors(errors);
      setDefaultValues(values as typeof defaultValues);
      return;
    }

    setErrors(null);
    setDefaultValues(initialDefaultValues);

    delete values.retypePassword;

    const data = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json() as Promise<AuthResponse>);

    login(data);
  }

  return (
    <form action={handleRegister} className="brandForm" noValidate>
      <h1 className="fullWidth">Register</h1>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        data-input="email"
        defaultValue={defaultValues.email}
        onChange={handleInputChange}
      />
      {errors?.email && <p className="fieldError">{errors.email[0]}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        defaultValue={defaultValues.password}
        onChange={handleInputChange}
      />
      {errors?.password && <p className="fieldError">{errors.password[0]}</p>}

      <label htmlFor="retypePassword">Retype Password</label>
      <input
        type="password"
        name="retypePassword"
        id="retypePassword"
        defaultValue={defaultValues.retypePassword}
        onChange={handleInputChange}
      />
      {errors?.retypePassword && (
        <p className="fieldError">{errors.retypePassword[0]}</p>
      )}

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        defaultValue={defaultValues.firstName}
        onChange={handleInputChange}
      />
      {errors?.firstName && <p className="fieldError">{errors.firstName[0]}</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        defaultValue={defaultValues.lastName}
        onChange={handleInputChange}
      />
      {errors?.lastName && <p className="fieldError">{errors.lastName[0]}</p>}

      <button type="submit" className="btn secondColumn">
        Register
      </button>
    </form>
  );
}
