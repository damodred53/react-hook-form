import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  FormState,
} from "react-hook-form";

function App() {
  // Destructure the register and handleSubmit methods from useForm
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onChange",
  });

  const { isSubmitting, errors, isValid, isSubmitSuccessful } = formState;

  console.log(isSubmitSuccessful);

  console.log("c'est valide ou non ? : ", isValid);

  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false);

  // Update the handleSubmit function to accept form data
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(formState);
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        alert("c'est arrivé");
        resolve();
      }, 2000)
    );
    /*setError("username", {
      type: "manual",
      message: "il est interdit de s'appeler prout",
    });*/
  };

  useEffect(() => {
    // Met à jour l'état local lorsque isSubmitSuccessful change
    if (isSubmitSuccessful) {
      setFormSubmittedSuccessfully(true);
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <div className="div_form">
        {formSubmittedSuccessfully && <span>prout</span>}

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("username", {
              required: "Vous devez mettre un nom d'utilisateur ",
              minLength: {
                value: 3,
                message: "Vous devez mettre un nom d'au moins 3 caractères",
              },
            })}
            placeholder="Username"
          />
          {errors.username && <span>{errors.username.message}</span>}

          <input
            type="email"
            {...register("email", { required: "Vous devez mettre un email" })}
            placeholder="Email"
            name="email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            type="password"
            {...register("password", {
              required: "Vous devez mettre un mot de passe",
            })}
            placeholder="Password"
            name="password"
          />
          {errors.password && <span>{errors.password.message}</span>}

          <button disabled={!isValid} className="button" type="submit">
            S'inscrire
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
