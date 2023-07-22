export default function Navbar() {
    return (
        <section className="navigation-bar">
            <nav className="navbar">
                <div className="container-fluid">
                    <div>
                        {/*Add Logo */}
                    </div>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">For Individuals</li>
                        <li className="nav-item">For Chamas</li>
                        <li className="nav-item">For Charities</li>
                    </ul>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">How it works</li>
                        <li className="nav-item">Sign In</li>
                        <li className="nav-item">Create a Fundraiser</li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}