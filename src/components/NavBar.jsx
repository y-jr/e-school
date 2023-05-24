export default function NavBar() {
    return (
        <>

            <div className="w-100 w-md-auto d-md-none brand-mobile pb-2">
                <a class="navbar-brand" href="#">
                    <img src="icon.png" alt="Bootstrap" width="65" height="55" />
                </a>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-md-5">
                <div className="container-fluid">
                    <a class="navbar-brand d-none d-md-block" href="#">
                        <img src="icon.png" alt="Bootstrap" width="65" height="55" />
                    </a>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Direção Geral</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Alunos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Professores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">DAC</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coordenação
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Geral</a></li>
                                    <li><a className="dropdown-item" href="#">Acadêmica</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Associação</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}