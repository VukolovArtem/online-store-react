import React from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";

const DevicePage = () => {
   const device = {
      id: 2,
      name: "Iphone 12 PRO",
      price: 2500,
      rating: 5,
      img: "https://www.google.com/aclk?sa=l&ai=DChcSEwjUt7D6_NH-AhVMA4sKHZG9DHYYABAFGgJlZg&sig=AOD64_0t1mZ1pF-soc9_gIDK5sCBZ6whmg&adurl&ctype=5&ved=2ahUKEwjDxqL6_NH-AhXfxgIHHYcLBn8Qvhd6BAgBEFY",
   };

   const description = [
      { id: 1, title: "Оперативная память", description: "5Гб" },
      { id: 2, title: "Камера", description: "12 Мп" },
      { id: 3, title: "Процессор", description: "Интел 3" },
      { id: 4, title: "Кол.ядер", description: "3" },
      { id: 5, title: "Аккумулятор", description: "5000 Ач" },
   ];
   return (
      <Container className="mt-3">
         <Row>
            {" "}
            <Col md={4}>
               <Image width={300} height={300} src={device.img}></Image>
            </Col>
            <Col md={4}>
               {" "}
               <Row className="d-flex flex-column align-items-center">
                  <h2>{device.name}</h2>
                  <div className="d-flex align-items-center justify-content-center">
                     {device.rating}
                  </div>
               </Row>
            </Col>
            <Col md={4}>
               <Card
                  className="d-flex flex-column align-items-center justify-content-around"
                  style={{ width: 300, height: 300, fontSize: 32 }}
               >
                  <h3>{device.price}</h3>
                  <Button>Добавить</Button>
               </Card>
            </Col>
         </Row>
         <Row className="d-flex flex-column m-3">
            <h2>Характеристики</h2>
            {description.map((info, index) => (
               <Row
                  key={info.id}
                  style={{
                     background: index % 2 === 0 ? "lightgray" : "transparent",
                     padding: 10,
                  }}
               >
                  {info.title}: {info.description}
               </Row>
            ))}
         </Row>
      </Container>
   );
};

export default DevicePage;
