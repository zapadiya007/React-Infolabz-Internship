import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Alert, Image } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import './GitaAPI.css';

function GitaAPI() {


    const [myData, setData] = useState([]);
    let a = 1;
    const getapi = () => {
        fetch('https://bhagavadgitaapi.in/chapters/')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json)
            }
            );
    };

    useEffect(() => {
        getapi();

        // const interval = setInterval(() => { getapi(); }, 50000);
        // return () => clearInterval(interval);

    }, []);


    return (
        <Container className='mb-5 mt-4' fluid >

            <Alert className='p-4 m-3 text-center' variant='success'>
                <Image width='65%' src="https://repository-images.githubusercontent.com/314205765/0bb18d80-2b22-11eb-8f6f-ccf20c0c2679" fluid />
            </Alert>

            <Row xs={1} md={2} className='g-3' >
                <>
                    {


                        myData.map((chapter) => {
                            let variant = 'light';
                            return (
                                <div>
                                    <Col className='container-fluid mt-3'>

                                        <Card
                                            border="primary"
                                            className="card-h-news "
                                            bg={variant.toLowerCase()}
                                            key={variant}
                                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                        >
                                            <Card.Header>{`Chapter No. : ${chapter.chapter_number}  |  Verses Count : ${chapter.verses_count}`}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>{` ${chapter.name} ( ${chapter.transliteration} )`}</Card.Title>
                                                <Card.Text>{chapter.meaning.hi} ( {chapter.meaning.en} )</Card.Text>
                                                <Card.Text></Card.Text>
                                                {/* <br/> */}
                                                <hr />
                                                <Card.Text><h5>Summary : </h5></Card.Text>
                                                <Card.Text><h6>Hindi : </h6>{chapter.summary.hi}</Card.Text>
                                                <Card.Text><h6>English : </h6>{chapter.summary.en}</Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            )

                        })
                    }
                </>
            </Row>
        </Container>
    );
}

export default GitaAPI;