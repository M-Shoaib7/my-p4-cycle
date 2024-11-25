import React from "react";
import Link from "next/link";

const Header = () => {
    return(
        <header className="header">
           <Link href="/"><h1 className="logo">RIDEL</h1></Link> 
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/about" >About</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;