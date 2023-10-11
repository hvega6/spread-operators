import './App.css';

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return(
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return(
    <Button
    {...buttonProps}
    type={'secondary'}
    onclick={() => {
      alert("Loggining in!");
    }}
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Susies' Salad S-bar</header>
      <Button type="primary" onclick={() => alert("Signing up!")}>
        Sign Up
      </Button>
      <LoginButton type="seconday" onClick={() => alert("Logging in")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
