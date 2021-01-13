import { Button } from 'components/atoms';
import { popupSelector } from 'modules';
import React from 'react';
import { connect } from 'react-redux';
import { hidePopup } from 'services/popup';
import styled from 'styled-components';
import { RiLogoutBoxLine as LogoutIc, RiCheckFill as SuccessIc, RiSpam2Line as DangerIc } from 'react-icons/ri';
import { breakpoints } from 'utils';

const Popup = ({ data }) => {
  const handleClickButton = () => {
    if(data.onClickButton){
      data.onClickButton();
    }
    hidePopup();
  }

  const handleClickSecondButton = () => {
    if(data.onClickSecondButton){
      data.onClickSecondButton();
    }
    hidePopup();
  }

  const handleAlertIcon = () => {
    switch(data.type){
      case 'logout':
        return <LogoutIc />
      case 'success':
        return <SuccessIc />
      case 'danger':
        return <DangerIc />
      default:
        return <SuccessIc />
    }
  }
  return (
    <PopupWrap active={data.show}>
      <div className="modal"/>
      <div className="box">
        <div className="box-content">
          <div className="alert-type">
            {handleAlertIcon()}
          </div>
          <h1 className="title">{data.title}</h1>
          <div className="desc">{data.description}</div>
          <div className="popup-action">
            <Button variant="primary" title={data.buttonTitle} onClick={handleClickButton}/>
            {data.showSecondButton && (
              <Button variant="secondary" title={data.buttonSecondTitle}  onClick={handleClickSecondButton}/>
            )}
          </div>
        </div>
      </div>
    </PopupWrap>
  );
};

const reduxState = state =>({
  data: popupSelector(state)
});

export default connect(reduxState)(Popup);

const PopupWrap = styled.div`
  z-index: ${({active}) => active ? `999` : `-1`};
  position: absolute;
  transition: 0.5s ease;
  .modal{
    transition: 0.5s ease;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: ${({active}) => active ? `9` : `-1`};
    background-color: #263238;
    opacity: ${({active}) => active ? `0.8` : `0`};
  }
  .box{
    box-sizing: border-box;
    transition: 0.3s ease;
    position: fixed;
    top: ${({active}) => active ? `100px`: `-100%`};
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    border-radius: 0.25rem;
    background: #fff;
    min-width: 480px; 
    ${breakpoints.xs}{
      min-width: 90%;
    }
    .box-content{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .alert-type{
        background: #fff;
        width: 80px;
        height: 80px;
        position: absolute;
        top: -50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 3px solid tomato;
        svg{
          font-size: 32px;
          width: 60px;
          color: #434f55;

        }
      }
      .title{
        color: #434f55;
        font-weight: 400;
        line-height: 2.5rem;
        margin: 0 2rem;
        margin-top: 60px;
      }
      .desc{
        font-size: 14px;
        opacity: 0.8;
        margin: 1rem 4rem 0;
        line-height: 1.5rem;  
        color: #263238;
        text-align: center;
        ${breakpoints.xs}{
          margin: 1rem 2rem 0;
        }
      }
      .popup-action{
        background: red;
        width: 100%;
        display: flex;
        margin-top: 4rem;
        flex-grow: initial;
        button{
          width: 100%;
          border: 1px solid #fff;
        }
      }

    }
  }
`;