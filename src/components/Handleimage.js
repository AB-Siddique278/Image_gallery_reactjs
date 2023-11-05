
const Handleimage = ({draggedImage}) => {
    return (
        <div className='absolute w-full z-50   h-full bg-black top-0 duration-300 left-0'>
        <img className='w-full h-full' src={draggedImage?.image} alt="" /> 
   </div>
    );
};

export default Handleimage;