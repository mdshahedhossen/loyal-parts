import React from 'react';

const EditProfile = () => {
    const handelAddProduct=event=>{
        event.preventDefault()
        const name = event.target.Model.value;
        const brand = event.target.Brand.value;
        const available = event.target.Stock.value;
        const price = event.target.Price.value;
        const minimum = event.target.Minimum.value;
        const description = event.target.Description.value;
        const image = event.target.imageUrl.value
       const newProduct = {
        name:name,
        brand: brand,
        minimum: minimum,
        available: available,
        price: price,
        img: image,
        description: description
       }

    }
    return (
        <div className='bg-base-200'>
        <h1 className='text-3xl border-b-4 p-3 border-accent'>Edit Profile <div className="badge bg-green-500">online</div></h1>
        <form onSubmit={handelAddProduct} className='px-3 lg:px-20 flex flex-col '>

            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='w-full'>

                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold"> Name</span>
                        </label>
                        <input name='Model' required type="text" placeholder=" Name" className="input input-bordered rounded-none w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input name='Brand' required type="text" placeholder="Email" className="input input-bordered rounded-none w-full max-w-xs" />

                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold">Web Site</span>
                        </label>
                        <input name='Stock' required type="number" placeholder="web site" className="input input-bordered rounded-none w-full max-w-xs" />

                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold">address</span>
                        </label>
                        <input name='Price' required type="text" placeholder="address" className="input input-bordered rounded-none w-full max-w-xs" />

                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold">Linkdin</span>
                        </label>
                        <input name='Minimum' required type="text" placeholder="Minimun order qunatity" className="input input-bordered rounded-none w-full max-w-xs" />

                    </div>
                </div>

                <div  className='w-full'>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold">About</span>
                        </label>

                        <textarea name="Description" id="" cols="30" rows="8" placeholder='about' className='p-3 w-full max-w-xs'></textarea>
                    </div>

                    
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">
                            <span className="label-text font-bold">Add a photo url</span>
                        </label>
                        <input name='imageUrl' required type="url" placeholder="photo url" className="input input-bordered rounded-none w-full max-w-xs" />

                    </div>

                    <div  className="border-dashed  border-4 border-neutral my-5 w-7/12">
                    <h1 className='bg-base-300 p-3 font-bold'>Upload a product cover image</h1>
                    <input disabled type="file" name="image" id="" className='p-4' />
                    </div>
                </div>
            </div>

            <button type="submit" className='btn btn-netural w-1/2 my-5 mx-auto'>Update</button>
        </form>
    </div>
    );
};

export default EditProfile;