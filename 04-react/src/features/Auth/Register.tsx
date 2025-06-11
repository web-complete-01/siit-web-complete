import { useState } from 'react';

export function Register() {
  // Oldschool React way: controlled inputs (two-way binding)
  // 1. state for the input
  // 2. value of field === state of the input <input value={formValues.email}  />
  // 3. field onChange modifies the state variable setFormValues({...formValues, email: e.target.value })
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(formValues);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  // classic JS way of handling a submit event
  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const data = new FormData(e.target as HTMLFormElement);
  //   console.log(data.get('firstName'));
  //   for(const value of data.entries()) {
  //     console.log(value);

  //   }
  // }

  return (
    <form action="" className="brandForm" onSubmit={handleSubmit}>
      <h1 className="fullWidth">Register</h1>

      <label htmlFor="email">Email</label>
      <input
        value={formValues.email}
        onChange={handleInputChange}
        type="email"
        name="email"
        id="email"
        data-input="email"
      />

      <label htmlFor="password">Password</label>
      <input
        value={formValues.password}
        onChange={handleInputChange}
        type="password"
        name="password"
        id="password"
      />

      <label htmlFor="retypePassword">Retype Password</label>
      <input
        value={formValues.retypePassword}
        onChange={handleInputChange}
        type="password"
        name="retypePassword"
        id="retypePassword"
      />

      <label htmlFor="firstName">First Name</label>
      <input
        value={formValues.firstName}
        onChange={handleInputChange}
        type="text"
        name="firstName"
        id="firstName"
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        value={formValues.lastName}
        onChange={handleInputChange}
        type="text"
        name="lastName"
        id="lastName"
      />

      <button type="submit" className="btn secondColumn">
        Register
      </button>
    </form>
  );
}
