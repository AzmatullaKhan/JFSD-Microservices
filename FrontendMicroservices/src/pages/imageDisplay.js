// import React, { useEffect, useState } from 'react';

// const ImageDisplay = ({ id }) => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:9001/images/1`)
//             .then(response => response.json())
//             .then(data => setImages(data))
//             .then(response => console.log(response))
//             .catch(error => console.error('Error fetching images:', error));
//     }, [id]);

//     setTimeout(()=>{
//         console.log(images)
//     },1000)
//     return (
//         <div>
//             {images.map((base64Image, index) => (
//                 <img 
//                     key={index} 
//                     src={base64Image} 
//                     alt={`Image ${index + 1}`} 
//                     style={{ width: '100px', margin: '10px' }} 
//                 />
//             ))}
//         </div>
//     );
// };

// export default ImageDisplay;
