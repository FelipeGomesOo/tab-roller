"use client" 
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';
import { useFormInput } from '@/lib/hooks';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
export default function LoginForm() {
 
    const { pending } = useFormStatus();
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    const userNameProps = useFormInput({ initialValue: "" });
    const passwordProps = useFormInput({ initialValue: "" });

  return (
     <Card className='w-96'>
       <CardHeader>
        <CardTitle>Login to TabRoller</CardTitle> 
      </CardHeader>
      <CardContent>
        <form action={dispatch}> 
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="email">Email:</Label>
            <Input 
              type="text"
            name="email" 
              placeholder="Enter your email address" 
              required {...userNameProps} /> 
            <Label htmlFor="password">Password:</Label>
            <Input 
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
          </div>
        </form>
    </CardContent>
    </Card>
    
)};