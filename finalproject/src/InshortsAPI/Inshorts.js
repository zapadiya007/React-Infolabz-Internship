import 'bootstrap/dist/css/bootstrap.min.css';
import './Inshorts.css';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';

function Inshorts() {

  const [myData, setData] = useState([]);
  const getapi = () => {
    fetch('https://inshortsapi.vercel.app/news?category=national')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data)
      }
      );
  };

  useEffect(() => {
    getapi();

    const interval = setInterval(() => { getapi(); }, 50000);
    return () => clearInterval(interval);

  }, []);



  return (
    <Container fluid >
      <Row xs={1} md={3} className='g-2' >
        {
          myData.map((value) => {
            return (
              <>
                <Col className='container-fluid mt-4'>
                  <Card className='card-h-news'>
                    <Card.Img className='card-img-top' variant="top" src={value.imageUrl} />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>{value.content}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        {value.date}, {value.time}
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>

              </>
            )
          })
        }
      </Row>
    </Container>
  );
}

export default Inshorts;
