import actionType from './actionType';

const initialState = {
  title: '', // title of popup
  description: '', // description of popup
  onClickButton: null, // action button primary in popup
  show: false, // handle for visibility
  buttonTitle: 'OK', // button primary title
  buttonSecondTitle: 'Cancel', // button secondary title
  customButton: null, // a custom component for button
  showSecondButton: false, // handle for visibility button secondary
  onClickSecondButton: null, // action button secondary
  type: null
};

export const popup = (state = initialState, action) => {
  switch(action.type){
    case actionType.SET_POPUP:
      console.log('from reducer',action.value)
      return {
        ...state,
        ...action.value
      }
    case actionType.CLEAR_POPUP:
      return initialState;
    default:
      return state
  }
};