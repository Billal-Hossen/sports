import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


const PlayerTeams = (props) => {
    const { idTeam, strTeamBadge, strLeague, strSport } = props.playerTeam;
    const details = useHistory()
    return (
        <div className="col-md-3 my-3">

            <Card >
                <Card.Img variant="top" src={strTeamBadge} fluid />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{strLeague}</Card.Title>

                        <Card.Text>Sports Type:{strSport}</Card.Text>
                        {/* <Button as={Link}  to={`/team/${idTeam}`} variant="primary">View Details</Button> */}
                        <Button onClick={() => details.push(`/team/${idTeam}`)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlayerTeams;