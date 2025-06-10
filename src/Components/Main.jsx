import './Main.css'

export default function Main() {
    return (
        <section className='section'>
            <main className="main">
                <h1 className="main-h1">Fun Facts About React</h1>
                <ul className="main-ul">
                    <li className="main-list-item">
                        Was first released in 2013
                    </li>
                    <li className="main-list-item">
                        Was originally created by Jordan Walke
                    </li>
                    <li className="main-list-item">
                        Has well over 200K stars on GitHub
                    </li>
                    <li className="main-list-item">
                        Is maintained by Meta
                    </li>
                    <li className="main-list-item">
                        Powers thousands of enterprise apps, including mobile apps
                    </li>
                </ul>
            </main>
        </section>
    );
}
