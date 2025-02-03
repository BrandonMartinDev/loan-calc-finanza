import './header.css'

import LogoImg from '/Logo.png';

const Header = () => {

    return (
        <header className='container'>

            <a href="#">
                <img className='header-logo' src={LogoImg} alt="Finanza Logo" />
            </a>

            <nav className='header-nav'>
                <ul>
                    <li><a className='header-nav-link' href="#">Portfolio</a></li>
                    <li><a className='header-nav-link' target='_blank' href="https://github.com/BrandonMartinDev/Finanza-JS">GitHub Repo</a></li>
                </ul>
            </nav>

        </header>
    )

}

export default Header