import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import FixedModalFrame from '../common/FixedModalFrame';
import CareerButtonList from './CareerButtonList';
import ScrollDiv from './ScrollDiv';

const Title = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
`;

const CareerModal = ({ _handleModal }) => {
    const [select, setSelect] = useState('win');
    const onSelect = useCallback(select => setSelect(select), []);
    return (
        <FixedModalFrame _handleModal={_handleModal}>
            <Title>EFUB Career</Title>
            <CareerButtonList select={select} onSelect={onSelect} ></CareerButtonList>
            <ScrollDiv />
        </FixedModalFrame>
    );
};

export default CareerModal;