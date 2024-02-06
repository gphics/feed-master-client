class Processor {
  getItem() {
    const item = localStorage.getItem("isAuth");
    if (item && item === "true") return true;
    return false;
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  removeItem() {
    localStorage.removeItem("isAuth");
  }
}

const localStoreOps = new Processor();

export default localStoreOps;
