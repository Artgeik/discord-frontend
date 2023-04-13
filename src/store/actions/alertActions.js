const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
  return {
    OPEN_ALERT_MESSAGE: (content) => dispatch(openAlertMessage(content)),
    CLOSE_ALERT_MESSAGE: () => dispatch(closeAlertMessage()),
  };
};

export const openAlertMessage = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  };
};

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;
