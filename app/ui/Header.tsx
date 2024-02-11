 import Link from "next/link"
 import { auth } from "@/auth";
 
 export async function Header() {
    let session = await auth();
    let user = session?.user?.name;
    return (
      <header className="Header">
        <h1>Tab Roller</h1>
        <nav>
            {user ? `Welcome ${user}` : <Link href="/login">Login</Link>}
        
        
        </nav>
      </header>
  )}