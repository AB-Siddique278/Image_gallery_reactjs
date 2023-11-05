
const Hoverandselect = ({handleUnselect,selectedImages,handleDelete}) => {
    return (
        <div className='flex justify-between items-center p-5 '>
        <div className='flex justify-center items-center'>
            <input className='w-4 h-4 cursor-pointer' type="checkbox" checked   readOnly onClick={handleUnselect}/>
            <p className='pl-2 text-lg font-bold'>{selectedImages.length} FIles Selected</p>
        </div >
        <div className='pr-23'>
            <button
                onClick={handleDelete}
                className='text-[red]'>Delete File
            </button></div>
    </div>
    );
};

export default Hoverandselect;