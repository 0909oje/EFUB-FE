import React, { useState } from "react";
import styled from "styled-components";
import palette from "../lib/styles/palette"
import Button from "../components/common/Button";
import { RadioButton } from "../components/common/RadioButton";
import {CheckBox} from "../components/common/CheckBox";

const Banner = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //justify-content: center;
    width: 35rem;
    height: 50rem;
`
const Foot = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2.5rem;
    justify-content: space-between;
`
const FootSub = styled.div`
    width: 47%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const TextBox = styled.div`
    width: 100%;
    height: 9rem;
    border-radius: 14px;
    background-color: rgba(225, 225, 225, 0.15);
    margin-bottom: 2.5rem;
`
const Text1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.725rem; //28px
`
const Text2 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.725rem; //28px
`
const Input = styled.input`
    font-size: 1rem;
    font-weight: 300;
    border: none;
    background: black;
    border-bottom: 2px solid ${palette.white};
    color: ${palette.white};
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: 2.5rem;
    width: 100%; 
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
`

const DeveloperRecruitLead = () =>{
    return(
        <div>
            <Banner>
                <h1 style = {{height: '3.5rem', marginBottom: '0.01rem'}} >LEAD DEVELOPER</h1>
                <h6 style = {{marginTop: '0.001rem'}}>지원서 작성</h6>
            </Banner>
            <Main>
                <Text1>1. 지금까지의 프로젝트 경험를 서술해주세요. (500자 내외)</Text1>
                <TextBox/>
                <Text1>2. 깃허브 또는 기술블로그 링크를 적어주세요.</Text1>
                <Input/>
                <Text1>3. 세미나와 프로젝트에 참가 가능한지, 공지사항에 있는 모든 일정을 확인하셨습니까?</Text1>
                <Text1>4. 다음중 면접이 '불가능한' 시간을 선택해주세요. 불가능한 시간을 모두 선택해주시고, 모두 가능하다면 '모두 가능합니다'를 선택해주세요. </Text1>
                <Foot>
                    <Text2>3/3 페이지</Text2>  
                  <FootSub>
                        <Button blue>저장</Button>
                        <Button filled>제출하기</Button>
                    </FootSub>
                </Foot>
            </Main>
        </div>
    )
}

export default DeveloperRecruitLead;