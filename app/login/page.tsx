import LoginForm from "@/app/ui/login/LoginForm";
import { getUserByEmail } from '@/app/lib/data';

export default async function  LoginPage() {
  return (
    <LoginForm />
)};