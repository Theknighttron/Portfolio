import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const navs = [
        { text: 'Home', href: 'home' },
        { text: 'Projects', href: 'projects' },
        { text: 'Skills', href: 'skills' },
        { text: 'About', href: 'about' },
        { text: 'Blogs', href: 'blogs'},
        // { text: 'Contact', href: 'contact' },
        // { text: '', href: '' },
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/" legacyBehavior><a className="logo">Chriss</a></Link>

                <ul className="nav-links">
                    { navs.map((nav, index) => (
                        <li key={index}>
                            <ScrollLink
                                to={nav.href}
                                smooth={true}
                                duration={600}
                                className="nav-item cursor-pointer font-semibold"
                                activeClass="true"
                                spy={true}
                            >
                                {nav.text}
                            </ScrollLink>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
