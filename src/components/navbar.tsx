import Link from 'next/link';

export function Navbar() {
    return (
        <nav>
        <ul>
            <li>
                <a href='/'>
                    Inicio
                </a>
            </li>

            <li>
                <a href='/Contact'>
                    Contato
                </a>
            </li>
        </ul>
    </nav>
    )
}