import React, { useState } from "react";
import Card from "./Card";
import candidates from "../candidates.json";
import Verification from "./Verification"

import { Container, Row, Col } from "reactstrap";



function App(props) {

  
  const [candidate, setCandidates] = React.useState(candidates);
  const [verify, setVerify] = React.useState(false);
  const [votedCandidate, setVotedCandidate] = React.useState("");
  function voteCandidate(id_) {
    setVerify(true);
    setVotedCandidate(id_+1);
    console.log(id_+1);
  }
  if(verify){
    return(
      <Verification candidateId={votedCandidate}/>
    );
  }

  return (

  

    <div className="App">
     
      
      <div className="card-div-parent">
          <Container>
            <Row noGutters className=" pt-2 pt-md-5 px-4 px-xl-0 position-relative">
              
                  {candidate.map((candidate, index) => ( 

                      <Col xs={{ order: 2 }}  tag="aside" className="col-md-3 pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0" >

                     <Card  key={index}
            id={index} onClick={voteCandidate}
             img={candidate.img} name={candidate.name} constituency={candidate.constituency}/>
                    
                     </Col>
                      ))}
            </Row>
          </Container>
      </div>
      
    </div>
  );
                  }


export default App;
