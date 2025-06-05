import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
      <header className="header-menu">
        <Navbar expand="lg" className="navbar navbar-expand-lg">
          <div className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="navMenu" />
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo" height="" />
            </Navbar.Brand>
          </div>

         
          <div className="d-lg-none ml-auto">
            <a href="#" className="btn btn-login">
              SIGN UP
            </a>
            <a href="#" className="btn btn-outline-login">
              LOGIN
            </a>
          </div>

          <Navbar.Collapse id="navMenu" className="justify-content-md-between">
            <Nav className="navbar-nav">
              <Nav.Link href="#" className="nav-link active">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-link">
                Items1
              </Nav.Link>
              <Nav.Link href="#" className="nav-link">
                Items2
              </Nav.Link>
              <Nav.Link href="#" className="nav-link">
                Items3
              </Nav.Link>
              <Nav.Link href="#" className="nav-link">
                Items4
              </Nav.Link>
            </Nav>

           
            <div className="d-none d-lg-block">
                
              <a href="#" className="btn btn-login">
                SIGN UP
              </a>
              <a href="#" className="btn btn-outline-login">
                LOGIN
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </header>
     
    </>
  );
}

export default Header;
