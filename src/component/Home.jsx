import Card from "react-bootstrap/Card";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
    
      <Card className="bg-dark text-white border-0">
      <Card.Img src="https://images.pexels.com/photos/9770974/pexels-photo-9770974.jpeg" ></Card.Img>
        <Card.ImgOverlay>
        <div className="container">
        <Card.Title className="display-3 fw-bolder mb-0">New Season Arrivals</Card.Title>
          <Card.Text className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </Card.Text>
          
        </div>
          
        </Card.ImgOverlay>
      </Card>
      <Products/>
    </div>
  );
}

export default Home;
