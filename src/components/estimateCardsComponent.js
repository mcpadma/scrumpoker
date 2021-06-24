import React from 'react'
import { Card, Button } from 'react-bootstrap';

function EstimateCardsComponent(props) {
  const storyPtHandler = () => {

  }
  return (
    <div className="flex-container">
      {props.storyArr.map((v, i) => {
        return (
          <div className="flex-item" key={i}>
            <Card style={{ width: '8rem' }} className="cardContent">
              <Card.Body>
                <Card.Text>
                  <h1 className="cardText">{v}</h1>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className="createRoom" onClick={storyPtHandler}>Submit</Button>
              </Card.Footer>
            </Card>
          </div>
        )
      })}

    </div>
  )
}

export default EstimateCardsComponent
