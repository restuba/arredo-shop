import { Button } from "components";
import { popupSelector } from "modules";
import { React, connect } from "libraries";
import { hidePopup } from "services/popup";
import {
  RiLogoutBoxLine as LogoutIc,
  RiCheckFill as SuccessIc,
  RiSpam2Line as DangerIc,
} from "react-icons/ri";
import { Wrapper } from "./style";

const Index = ({ data }) => {
  const handleClickButton = () => {
    if (data.onClickButton) {
      data.onClickButton();
    }
    hidePopup();
  };

  const handleClickSecondButton = () => {
    if (data.onClickSecondButton) {
      data.onClickSecondButton();
    }
    hidePopup();
  };

  const handleAlertIcon = () => {
    switch (data.type) {
      case "logout":
        return <LogoutIc />;
      case "success":
        return <SuccessIc />;
      case "danger":
        return <DangerIc />;
      default:
        return <SuccessIc />;
    }
  };
  return (
    <Wrapper active={data.show}>
      <div className="modal" />
      <div className="box">
        <div className="box-content">
          <div className="alert-type">{handleAlertIcon()}</div>
          <h1 className="title">{data.title}</h1>
          <div className="desc">{data.description}</div>
          <div className="popup-action">
            <Button
              variant="primary"
              title={data.buttonTitle}
              onClick={handleClickButton}
            />
            {data.showSecondButton && (
              <Button
                variant="secondary"
                title={data.buttonSecondTitle}
                onClick={handleClickSecondButton}
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const reduxState = (state) => ({
  data: popupSelector(state),
});

export default connect(reduxState)(Index);
