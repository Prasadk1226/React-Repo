import React from "react";
import products from "./fakestore"

function handleClick(){
    return(<>
    
    {products.map((a, b) => {
          return (
            <div
              style={{
                border: "2px solid black",
                borderRadius: "20px",
                padding: "15px",
                display: "flex",
                backgroundColor: a.available ? "white" : "violet",
                gap: "10px",
              }}
            >
              <div className="text" style={{ width: "60%" }}>
                <div className="titleText">
                  {a.title} <br />
                  <strong> Categeory: </strong>
                  {a.category} <br />
                  <b>Brand:</b> {a.brand} <br />
                  <b>Desc:</b> {a.description} <br />
                  {a.discount ? `Discount:${a.discount}%` : ""} <br />
                  <b>
                    Price:
                    {(a.price * 83).toLocaleString("en-US", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    })}{" "}
                    <sup style={{ fontSize: "16px" }}>
                      <b>*</b>
                    </sup>
                  </b>
                  {/* ₹{a.price * 83}* */}
                </div>
              </div>
              <div className="imgs">
                <img
                  className="images"
                  src={a.image}
                  height="150px"
                  width="150px"
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </>)
}
export default handleClick;