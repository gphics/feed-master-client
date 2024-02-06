const { default: library } = require("./library");

export default function checkLibrary() {
      const filt = library.filter((elem) => {
        const {
          name,
          img_url,
          description,
          categories,
          nutritionalAttributes,
          nutritionalValues,
          potentialConstraints,
        } = elem;
        if (
          !name ||
          !img_url ||
          !description ||
          !categories ||
          !nutritionalAttributes ||
          !nutritionalValues ||
          !potentialConstraints
        ) {
          return elem;
        }
      });
      console.log(filt);
}