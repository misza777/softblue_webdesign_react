import Header from "../../components/header/Header";
import "./notFound.scss";
import { Container } from "react-bootstrap"; 

export default function notFoundPage() {
  return (
    <>
      <div className="container-home p-sm-2 p-md-3 p-lg-4 p-xl-5">
     <Container>
        <div className="notFound-body">
          <img
            className="notFound-image"
            src="images/404-sloth.svg"
            alt="space sloth did not found requested page"
          />
          <div className="errorPage-reason">
            <h2>Oops!</h2>
            <h3>
              Much like a Space Sloth, requested page or post does not exist.
              Sorry about that!
            </h3>
          </div>
        </div>
    </Container>
      </div>
    </>
  );
}
