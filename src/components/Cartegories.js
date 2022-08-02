import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Cartegories = () => {

    return (
        <List>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4 >Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>ThaiFood</h4>
            </SLink>
            <SLink to={"/cuisine/Indian"} >
                <GiChopsticks />
                <h4>Indian</h4>
            </SLink>

        </List >
    )
}

const List = styled.div`
    display:flex;
    justify-content: center;
    margin:2rem 0rem;

    h4{
        text-decoration:none;
    }
`

const SLink = styled(NavLink)`
    &:hover{
        opacity:0.2;

}
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    border-radius:50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height:6rem;
    cursor:pointer;
    transfrom: scale(0.8);
    transition:opacity .3s ease;

    h4{
        color:white;
        font-size: 0.8 rem;   
    }

    svg{
        color:white;
        font-size: 1.5rem;
    }

    &.active{
        background:linear-gradient(to right, #f27121, #e94057);

        svg{
            color:white;
        }

        h4{
            color:white;
        }
    }
`


export default Cartegories