function Header(props) {

    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong> {props.name}  </strong>
                    </a>
                </div>
            </div>
        </header>
    )

}

export default Header