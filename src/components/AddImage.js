import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
const AddImage = ({setImages,images}) => {

    const [selectedImage, setSelectedImage] = useState(null);


   
    const handleImageSelect = (e) => {
      
    const maxIdObject = images.reduce((max, obj) =>
    (parseInt(obj._id) > parseInt(max._id) ? obj : max)
  );
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setSelectedImage(URL.createObjectURL(selectedFile));
            const addNewImage= {_id:String(parseInt(maxIdObject._id) +1),image:URL.createObjectURL(selectedFile)}
            setImages([...images,addNewImage])
        }
    };
    return (<label htmlFor="file-input" className="flex flex-col border-2 border-dashed hover:cursor-pointer rounded-[15px] justify-center items-center  min-w-[150px] min-h-[150px]" >

   
        <span className="text-xl"><BiImageAdd></BiImageAdd></span>
        
        <p>Add Image</p>
        <input
            className="hidden"
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleImageSelect}

        />
    </label>


    );
};

export default AddImage;