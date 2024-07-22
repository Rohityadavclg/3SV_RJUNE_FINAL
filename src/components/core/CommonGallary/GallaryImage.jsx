import React, { useState } from "react"

import img1 from "../../../assets/Images/Gallery/Gallery_1.jpg"
import img2 from "../../../assets/Images/Gallery/Gallery_2.jpg"
import img3 from "../../../assets/Images/Gallery/Gallery_3.jpg"
import img4 from "../../../assets/Images/Gallery/Gallery_4.jpg"
import img5 from "../../../assets/Images/Gallery/Gallery_5.jpg"
import img6 from "../../../assets/Images/Gallery/Gallery_6.jpg"
import img7 from "../../../assets/Images/Gallery/Gallery_7.jpg"
import img8 from "../../../assets/Images/Gallery/Gallery_8.jpg"
import img9 from "../../../assets/Images/Gallery/Gallery_9.jpg"
import img10 from "../../../assets/Images/Gallery/Gallery_10.jpg"
import img11 from "../../../assets/Images/Gallery/Gallery_11.jpg"
import img12 from "../../../assets/Images/Gallery/Gallery_12.jpg"
import img13 from "../../../assets/Images/Gallery/Gallery_13.jpg"
import img14 from "../../../assets/Images/Gallery/Gallery_14.jpg"
import img15 from "../../../assets/Images/Gallery/Gallery_15.jpg"
import img16 from "../../../assets/Images/Gallery/Gallery_16.jpg"
import img17 from "../../../assets/Images/Gallery/Gallery_17.jpg"
import img18 from "../../../assets/Images/Gallery/Gallery_18.jpg"
import img19 from "../../../assets/Images/Gallery/Gallery_19.jpg"
import img20 from "../../../assets/Images/Gallery/Gallery_20.jpg"
import img21 from "../../../assets/Images/Gallery/Gallery_21.jpg"
import img22 from "../../../assets/Images/Gallery/Gallery_22.jpg"
import img23 from "../../../assets/Images/Gallery/Gallery_23.jpg"
import img24 from "../../../assets/Images/Gallery/Gallery_24.jpg"
import img25 from "../../../assets/Images/Gallery/Gallery_25.jpg"
import img26 from "../../../assets/Images/Gallery/Gallery_26.jpg"
import img27 from "../../../assets/Images/Gallery/Gallery_27.jpg"
import img28 from "../../../assets/Images/Gallery/Gallery_28.jpg"
import img29 from "../../../assets/Images/Gallery/Gallery_29.jpg"
import img30 from "../../../assets/Images/Gallery/Gallery_30.jpg"
import img31 from "../../../assets/Images/Gallery/Gallery_31.jpg"
import img32 from "../../../assets/Images/Gallery/Gallery_32.jpg"
import img33 from "../../../assets/Images/Gallery/Gallery_33.jpg"
import img34 from "../../../assets/Images/Gallery/Gallery_34.jpg"
import img35 from "../../../assets/Images/Gallery/Gallery_35.jpg"
import img36 from "../../../assets/Images/Gallery/Gallery_36.jpg"
import img37 from "../../../assets/Images/Gallery/Gallery_37.jpg"
import img38 from "../../../assets/Images/Gallery/Gallery_38.jpg"
import img39 from "../../../assets/Images/Gallery/Gallery_39.jpg"
import img40 from "../../../assets/Images/Gallery/Gallery_40.jpg"
import "../../../../src/App.css"
import CloseIcon from '@mui/icons-material/Close';
import Footer from "../../Common/Footer"
const GallaryImage = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 19,
            imgSrc: img19,
        },
        {
            id: 20,
            imgSrc: img20,
        },
        {
            id: 21,
            imgSrc: img21,
        },
        {
            id: 22,
            imgSrc: img22,
        },
        {
            id: 23,
            imgSrc: img23,
        },
        {
            id: 24,
            imgSrc: img24,
        },
        {
            id: 25,
            imgSrc: img25,
        },
        {
            id: 26,
            imgSrc: img26,
        },
        {
            id: 27,
            imgSrc: img27,
        },
        {
            id: 28,
            imgSrc: img28,
        },
        {
            id: 29,
            imgSrc: img29,
        },
        {
            id: 30,
            imgSrc: img30,
        },
        {
            id: 31,
            imgSrc: img31,
        },
        {
            id: 32,
            imgSrc: img32,
        },
        {
            id: 33,
            imgSrc: img33,
        },
        {
            id: 34,
            imgSrc: img34,
        },
        {
            id: 35,
            imgSrc: img35,
        },
        {
            id: 36,
            imgSrc: img36,
        },
        {
            id: 37,
            imgSrc: img37,
        },
        {
            id: 38,
            imgSrc: img38,
        },
        {
            id: 39,
            imgSrc: img39,
        },
        {
            id: 40,
            imgSrc: img40,
        },
    ];
    
  
const [model,setModel] =useState(false);
const [temprersrc,setTemperSrc] = useState('');
const getImg=(imgSrc)=>{
 setTemperSrc(imgSrc);
 setModel(true);
}
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
      <div className={model ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" : "hidden"}>
        <div className="relative">
          <img src={temprersrc} className="max-w-full max-h-screen object-contain rounded-lg shadow-xl" />
          <button
            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 transition transform hover:scale-110"
            onClick={() => setModel(false)}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => getImg(item.imgSrc)}
          >
            <img src={item.imgSrc} alt={`Gallery item ${index + 1}`} className="w-full h-60 object-cover transition-opacity duration-300 hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 transition-opacity duration-300 hover:opacity-50"></div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default GallaryImage
