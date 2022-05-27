import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handelAddProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const supplier = event.target.supplier.value;
    const quantity = event.target.quantity.value;
    const price = event.target.Price.value;
    const minimumOrder = event.target.Minimum.value;
    const description = event.target.Description.value;
    const img = event.target.imageUrl.value;

    const newProduct = {
      name: name,
      supplier: supplier,
      quantity: quantity,
      minimumOrder: minimumOrder,
      price: price,
      img: img,
      description: description,
    };
    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast("product added successfuly");
          event.target.reset();
        } else {
          toast.error("something has worng plase try again");
        
        }
      });
  };
  return (
    <div>
        <h2 className="text-center font-bold text-ellipsis text-3xl mb-8 underline">Add Your Product</h2>
        <div className="bg-base-200 mb-10">
      <form
        onSubmit={handelAddProduct}
        className="px-3 lg:px-20 flex flex-col "
      >
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full">
            <div className="form-control w-full max-w-xs mt-2">
              <label className="label">
                <span className="label-text font-bold">Parts Name</span>
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Parts Name"
                className="input input-bordered rounded-none w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs mt-2">
              <label className="label">
                <span className="label-text font-bold">Supplier</span>
              </label>
              <input
                name="supplier"
                required
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered rounded-none w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs mt-2">
              <label className="label">
                <span className="label-text font-bold">Stock Quantity</span>
              </label>
              <input
                name="quantity"
                required
                type="number"
                placeholder="Stock Quantity"
                className="input input-bordered rounded-none w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs mt-2">
              <label className="label">
                <span className="label-text font-bold">Price per unit</span>
              </label>
              <input
                name="Price"
                required
                type="number"
                placeholder="taka"
                className="input input-bordered rounded-none w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs mt-2">
              <label className="label">
                <span className="label-text font-bold">
                  Minimun order qunatity
                </span>
              </label>
              <input
                name="Minimum"
                required
                type="number"
                placeholder="Minimun order qunatity"
                className="input input-bordered rounded-none w-full max-w-xs"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="form-control w-full max-w-xs mt-2">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>

              <textarea
                name="Description"
                id=""
                cols="30"
                rows="8"
                placeholder="Description"
                className="p-3 w-full max-w-xs"
              ></textarea>
            </div>

            <div className="form-control w-full max-w-xs mt-2">
              <label className="label">
                <span className="label-text font-bold">Add a photo url</span>
              </label>
              <input
                name="imageUrl"
                type="url"
                placeholder="photo url"
                className="input input-bordered rounded-none w-full max-w-xs"
              />
            </div>

          </div>
        </div>

        <button type="submit" className="btn btn-netural w-1/2 my-5 mx-auto hover:bg-green-600">
          Add Product
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddProduct;
