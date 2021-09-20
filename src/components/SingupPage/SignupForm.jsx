import { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import FormMessage from "./FormMessage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const initialData = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

const SignupForm = () => {
  const [state, setState] = useState({
    data: initialData,
    errors: {},
    loading: false,
  })

  const handleChange = (e) =>
    setState({
      ...state,
      data: { ...state.data, [e.target.name]: e.target.value },
      errors: { ...state.errors, [e.target.name]: "" },
    });

  const validate = (data) => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = "Email is not correct";

    if (!data.password) errors.password = "Password cannot be blank";
    if (!equals(data.password, data.passwordConfirmation))
      errors.password = "password is no equals to password confirmation";
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(state.data);
    setState({
      ...state,
      errors: errors
    });
    if (Object.keys(errors).length === 0) {
      setState({ 
        ...state,
        loading: true 
      });
      setTimeout(() => {
        setState({ 
          data: initialData,
          errors: {},
          loading: false 
        });
      }, 3000);
    }
  };

    return (
      <form className="singUp_form" onSubmit={handleSubmit}>
        {state.loading ? 
        <Loader type="Audio" color="#00BFFF" height={80} width={80} /> :
        <div className="field">
          <label className="label_field" htmlFor="email">Email</label>
          <input
            className={state.errors.email ? "error_input" : "input_field"}
            value={state.data.email}
            onChange={handleChange}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
          {state.errors.email && <FormMessage>{state.errors.email}</FormMessage>}

          <label className="label_field" htmlFor="password">Password</label>
          <input
            className={state.errors.password ? "error_input" : "input_field"}
            value={state.data.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            />
          {state.errors.password && <FormMessage>{state.errors.password}</FormMessage>}

          <label className="label_field" htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            className={state.errors.password ? "error_input" : "input_field"}
            value={state.data.passwordConfirmation}
            onChange={handleChange}
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            placeholder="password confirmation"
            />
          {state.errors.password && (
            <FormMessage>{state.errors.password}</FormMessage>
            )}

          <div className="fluid_buttons">
            <button type="submit" className="button form_button singUp--button">
              Sing Up
            </button>
            <Link to="/products" className="button form_button cancel--button">
              Cancel
            </Link>
          </div>
        </div>
    }
      </form>
    );
}

export default SignupForm;