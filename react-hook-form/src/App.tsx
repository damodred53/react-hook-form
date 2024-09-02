import { FormEvent } from 'react';
import './App.css';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function App() {
  // Destructure the register and handleSubmit methods from useForm
  const { register, handleSubmit, formState } = useForm();

  const {isSubmitting} = formState;

  // Update the handleSubmit function to accept form data
  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    console.log("Form data:", data);

    /*await new Promise<void>((resolve) => setTimeout(() => {
      alert("c'est arrivé");
      resolve();
    }, 3000))*/
    

  }

  return (
    <>
      <div className='div_form'>
        {/* Use the onSubmit method returned by useForm */}
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          {/* Spread the register function for each input and give them names */}
          <input type='text' {...register('username', {required: true})} placeholder="Username"   />

          <input type='email' {...register('email')} placeholder="Email" name='email' />

          <input type='password' {...register('password')} placeholder="Password" name='password' />

          <button disabled={isSubmitting} className='button' type="submit">S'inscrire</button>
        </form>
      </div>
    </>
  )
}

export default App;
function wait(arg0: number) {
  throw new Error('Function not implemented.');
}

