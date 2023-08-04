import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      expand="md"
      className="bg-warning shadow p-3 mb-5 rounded text-light"
    >
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center me-5" href="#">
          <img
            alt=""
            src="https://picsum.photos/200"
            width="70"
            height="70"
            className="d-inline-block align-top rounded-circle me-2"
          ></img>{" "}
          <h1>GEA</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Cats" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">1</NavDropdown.Item>
              <NavDropdown.Item href="#">2</NavDropdown.Item>

              <NavDropdown.Item href="#">3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              size="sm"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger" size="sm">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
