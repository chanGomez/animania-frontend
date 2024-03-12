// export function Navbar() VS export default function Navbar()
// the difference is the import export function Navbar() -------> Import { navbar } from components...
export default function Navbar(){
    return(
        <nav className="navbar">
            <section className="navbar-main-section">
                <h1 className="title">Animania</h1>
            </section>
            <section className="navbar-sub-section">
                <p>Anime</p>
                <p>Cartoons</p>
                <p>Random</p>
            </section>
        </nav>
    )
}