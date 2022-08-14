import { React, styled, connect } from 'libraries';
import { BiX as CloseIc, BiCheck as SuccessIc, BiInfoCircle as InfoIc, BiError as WarningIc, BiErrorAlt as DangerIc } from 'react-icons/bi';
import { notificationSelector } from 'modules';
import { removeNotifications } from 'services';

const Toast = ({ autoDeleteInterval, notification }) => {
  const generateIcon = (type) => {
    switch(type){
      case "INFO":
        return <InfoIc />;
      case "WARNING":
        return <WarningIc />;
      case "DANGER":
        return <DangerIc />;
      case "SUCCESS":
        return <SuccessIc />;
      default:
        return;
    }
  }

  const generateBackgroundColor = (type) => {
    switch(type){
      case "INFO":
        return "#5bc0de";
      case "WARNING":
        return "#f0ad4e";
      case "DANGER":
        return "#d9534f";
      case "SUCCESS":
        return "#5cb85c";
      default:
        return;
    }
  };

  return (
    <ToastWrap>
      {notification.length !== 0 && notification.map(item => {
        if(autoDeleteInterval && notification.length !== 0){
          setTimeout(() => {
            removeNotifications(item.id)
          }, autoDeleteInterval);
        }
        return(
          <div 
            style={{backgroundColor: generateBackgroundColor(item.type)}} 
            className="notification toast"
            key={item.id}
          >
            <CloseIc
              className="close-btn"
              onClick={() => removeNotifications(item.id)}
            />
            <div className="notification-image">
              {generateIcon(item.type)}
            </div>
            <div>
              <p className="notification-title">{item.title}</p>
              <div className="notification-message">{item.message}</div>
            </div>
          </div>
        );
      })}
    </ToastWrap>
  );
};

const reduxState = state => ({
  notification: notificationSelector(state)
})

export default connect(reduxState)(Toast);

const ToastWrap = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  z-index: 200;
  bottom: 8px;
  right: 8px;
  animation: toast-in-right 0.7s;
  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      translate: translateX(0);
    }
  }
  .notification{
    background: #fff;
    transition: 0.3s ease;
    position: relative;
    pointer-events: auto;
    overflow: hidden;
    margin: 0 0 6px;
    padding : 20px;
    margin-bottom: 15px;
    max-height: 100px;
    color: #000;
    opacity: 0.8;
    &:hover{
      opacity: 1;
    }
  }
  .toast{
    height: 50px;
    width: 280px;
    color: #fff;
    padding: 20px 15px 10px 10px;
    bottom: 8px;
    right: 8px;
    animation: toast-in-right 0.7s;

    .close-btn{
      position: absolute;
      top: 4px;
      right: 8px;
      font-size: 24px;
      transition: 0.3s ease;
      &:hover{
        filter: brightness(80%);
      }
    }
    .notification-image{
      float: left;
      margin-right: 16px;
      font-size: 36px;
    }
    .notification-title{
      font-weight: 700;
      font-size: 16px;
      text-align: left;
      margin-top: 0;
      margin-bottom: 6px;
      width: 300px;
      height: 18px;
    }
    .notification-message{
      margin: 0;
      text-align: left;
      height: 18px;
      margin-left: -1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;