import { useState } from 'react';
import { z, type ZodObject } from 'zod/v4';
import { useAuthContext } from './AuthContext';
import type { AuthResponse } from './types';

const validationSchema = z
  .object({
    email: z.email('Please enter a valid email address.'),
    password: z
      .string()
      .min(6, 'Your password should be at least 6 characters long.')
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
};

export function Login() {
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

  async function handleLogin(formData: FormData) {
    const values = Object.fromEntries(formData.entries());
    const errors = validateForm(values, validationSchema);

    if (errors) {
      setErrors(errors);
      setDefaultValues(values as typeof defaultValues);
      return;
    }

    setErrors(null);
    setDefaultValues(initialDefaultValues);

    const data = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json() as Promise<AuthResponse>);

    login(data);
  }

  return (
    <form action={handleLogin} className="brandForm" noValidate>
      <h1 className="fullWidth">Login</h1>

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
      
      <button type="submit" className="btn secondColumn">
        Login
      </button>
    </form>
  );
}
