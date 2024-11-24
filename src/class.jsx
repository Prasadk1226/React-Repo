import React, { Component } from "react";

const obj = [
  {
    productName: "Mobile",
    productPrice: 55000,
    productAvailability: true,
  },
  { productName: "Laptops", productPrice: 55000, productAvailability: false },
  { productName: "Watches", productPrice: 55000, productAvailability: true },
  { productName: "Audio", productPrice: 55000, productAvailability: false },

];

class class1 extends Component {
  render() {
    // let color1 = obj.productAvailability
    //   ? styles.available
    //   : styles.unavailable;
    //     return <div style={{ color: "white" }}>

    // {/* <h1 style={{backgroundColor: obj.productAvailability?"green":"red"}}>{obj.productName}:{obj.productPrice}</h1> */}
    // <h1 style={color1}>{obj.productName}:{obj.productPrice}</h1>

    //     </div>;
    return (
      <>
        <div>
          <div style={styles}>
            {obj[0].productName}:{obj[0].productPrice}
          </div>
          <div style={styles}>
            {obj[1].productName}:{obj[1].productPrice}
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  color: "white",
  available: { color: "green" },
  unavailable: { color: "red" },
};

export default class1;
