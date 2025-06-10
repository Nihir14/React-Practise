import './MyHeader.css'

export default function MyHeader() {
    return (
        <>
        <header>
            <nav className="nav">
                <img
                    src="src/assets/react.svg"
                    alt="React Logo"
                    className="nav-react-logo"
                />
                <span className="nav-react-text"> ReactFacts </span>
            </nav>
        </header>
        </>
    );
}
