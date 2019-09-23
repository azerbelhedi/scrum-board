import database from "../Database";

class Products {
  constructor() {
    this.db = database.db;
  }

  addProduct(name) {
    this.db
      .collection("projects-general")
      .doc(name)
      .set({
        name: name,
        sprint: 0,
        totalSprints: 0,
        progress: 0
      });
  }

  getProducts(callback) {
    let goodData = [];
    this.db
      .collection("projects-general")
      .get()
      .then(data => {
        // callback(data);
        data.forEach(item => {
          //console.log(item.data());
          goodData.push(item.data());
        });
        callback(goodData);
      });
  }
}

let products = new Products();

export default products;
