import React from "react";
import styled from "styled-components";
import '../App.css';




const Card = styled.div`
    display:flex;
    width:30%;
    text-align:center;
    margin:20px auto;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    border:1px solid black;
    box-shadow: 0px 1px 6px -2px grey;
    padding: 0px 30px;
    background-color:rgba(255, 255, 255, .3);
`;




const People = props => {
    return (
        <Card>
            <div className="people-container">
                <h2>{props.name}</h2>
                <p>Gender: {props.gender}</p>
                <p>Birth Year: {props.date}</p>
                <p>Height: {props.height}</p>
            </div>
        </Card>
    );
};


export default People;