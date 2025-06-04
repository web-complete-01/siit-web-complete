export function Register() {
  return (
    <form action="" className="brandForm">
      <h1 className="fullWidth">Register</h1>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />

      <label htmlFor="retypePassword">Retype Password</label>
      <input type="password" name="retypePassword" id="retypePassword" />

      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" />

      <button type="submit" className="btn secondColumn">Register</button>
    </form>
  );
}
