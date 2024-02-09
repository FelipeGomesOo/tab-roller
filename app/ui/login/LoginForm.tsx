"use client" 
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { useFormInput } from '@/app/lib/hooks';
import { Button } from '@/app/ui/button'; 
import {User} from '@/app/lib/definitions';
export default function LoginForm() {
 
    const { pending } = useFormStatus();
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    const userNameProps = useFormInput({ initialValue: "" });
    const passwordProps = useFormInput({ initialValue: "" });

  return (
    <form action={dispatch}> 
        <label htmlFor="email">Username:</label>
        <input  
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required 
            {...userNameProps} 
        />
        <label htmlFor="password">Password:</label>
        <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={6} 
            {...passwordProps} 
         />
        <Button aria-disabled={pending}>Log in</Button>
        <div aria-live="polite" aria-atomic="true" >
          {errorMessage && (
            <> 
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
    </form>
)};