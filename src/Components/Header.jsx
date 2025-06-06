import './Header.css'

export default function Header() {
    return (
        <>
            <div className='header'>
                <img
                    src="src\assets\react.svg"
                    alt="Raect Logo"
                    className="header-logo"
                />
                <nav className="header-nav">
                    <ul className="header-list">
                        <li className="header-list-item">Pricing</li>
                        <li className="header-list-item">About</li>
                        <li className="header-list-item">Contact</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

