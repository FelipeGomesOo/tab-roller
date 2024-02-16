 import Link from "next/link"
 import { auth, signOut } from "@/auth";
 import { Button, buttonVariants } from "@/components/ui/button"  
 
 export async function Header() {
    let session = await auth();
    let user = session?.user?.name;
    let loggedIn = <>
    <form action={async () => { 'use server'; await signOut(); }}>
      <span className="px-5">Welcome {user}</span>
      <Button variant="outline">Sign Out</Button>
    </form>
    </>
    let loggedOut= <><Link className={buttonVariants({ variant: "outline" })} href="/login">Login</Link></>

    return (
      <header className="px-3 flex justify-between items-center border-b absolute top-0 bg-white w-full h-16">
        <h1 className="text-xl font-bold text-black">Tab Roller</h1>  
        <nav>
            { user ? loggedIn : loggedOut }
        </nav>
      </header>
  )}