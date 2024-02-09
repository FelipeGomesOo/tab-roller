import LoginForm from "@/app/components/login/LoginForm";
import { getUserByEmail } from '@/app/lib/data';

export default async function  LoginPage() {
  const theUser = await getUserByEmail('contato@felipe-gomes.com')
  return (
    <LoginForm theUser={theUser}/>
)};