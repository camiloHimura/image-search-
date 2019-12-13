export const newFavorite = (state, newData) => {
  const id = new Date().getTime();
  const {name, description, images} = newData;
  return { ...state, [id]: {name, description, images}};
};

export const updateFavorite = (state, newData) => {
  if (state[newData.id]) {
    const {images} = state[newData.id];
    const {id, name, description} = newData;
    return { ...state, [id]: {name, description, images}};
  }
  return { ...state };
};

export const addImageToFavorite = (state, newData) => {
  const oldData = state[newData.listName];
  if (oldData) {
    const newImages = [newData.image, ...oldData.images];
    const finalData = {...oldData, images: newImages};
    return { ...state, [newData.listName]: finalData };
  }

  return { ...state };
};
