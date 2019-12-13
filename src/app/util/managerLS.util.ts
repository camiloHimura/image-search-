export default {
  save(key, data) {
    if (localStorage) {
      localStorage.setItem(key, data);
      return JSON.parse(localStorage.getItem(key));
    }
    return {};
  },

  get(key) {
    if (localStorage) {
      return JSON.parse(localStorage.getItem(key));
    }

    return {};
  }
}
