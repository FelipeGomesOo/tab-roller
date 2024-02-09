 import Link from "next/link"
 
 export function Header() {
    return (
      <header className="Header">
        <h1>Tab Roller</h1>
        <nav>
            <Link href="/login">Login</Link>
        </nav>
      </header>
  )}