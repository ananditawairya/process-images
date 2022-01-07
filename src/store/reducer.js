const initialState = {
  imageInfo: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return { ...state, imageInfo: state.imageInfo.concat(action.payload) };
    default:
      return state;
  }
};
