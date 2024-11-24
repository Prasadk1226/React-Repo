import React, { Component } from "react";

const obj = [
  {
    productName: "Mobile",
    productPrice: 55000,
    productAvailability: true,
    productImg: (
      <img
        src="https://www.bigcmobiles.com/media/catalog/product/cache/6f935541fc7266f00577560114fa3a98/s/t/starlight_1.jpg"
        alt="ipohne"
      />
    ),
  },
  {
    productName: "Laptops",
    productPrice: 55000,
    productAvailability: false,
    productImg: (
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-5-Platinum-Alcantara-001-1:VP1-539x440"
        alt="laptop"
      />
    ),
  },
  { productName: "Watches", productPrice: 55000, productAvailability: true,
    productImg: (
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-5-Platinum-Alcantara-001-1:VP1-539x440"
          alt="laptop"
        />
      ),
   },
  { productName: "Audio", productPrice: 55000, productAvailability: false,
    productImg: (
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-5-Platinum-Alcantara-001-1:VP1-539x440"
          alt="laptop"
        />
      ),
   },
];

class class1 extends Component {
  render() {
    let color = obj[0].productAvailability
      ? styles.available
      : styles.unavailable;
    // let color = obj[0].productAvailability?styles.available:styles.unavailable;
    // let color = obj[0].productAvailability?styles.available:styles.unavailable;
    // let color = obj[0].productAvailability?styles.available:styles.unavailable;

    return (
      <>
        <div>
          <div style={color}>
            {obj[0].productName}:{obj[0].productPrice} {obj[0].productImg}
          </div>
          <div style={color}>
            {obj[1].productName}:{obj[1].productPrice} {obj[1].productImg}
          </div>
          <div style={color}>
            {obj[2].productName}:{obj[0].productPrice} {obj[2].productImg}
          </div>
          <div style={color}>
            {obj[3].productName}:{obj[0].productPrice} {obj[3].productImg}
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  color: "white",
  available: {
    color: "green",
    border: "2px solid green",
    backgroundColor: "aqua",
  },
  unavailable: {
    color: "red",
    border: "2px solid black",
    backgroundColor: "aqua",
  },
};

export default class1;
