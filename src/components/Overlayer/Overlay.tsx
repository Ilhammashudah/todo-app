import React from "react";
import { IoRemoveCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { close } from "../../brain/features/toggle";

const Overlay = () => {
  const dispatch = useDispatch();

  const handleCloseTab = () => {
    // alert("okay");
    dispatch(close());
  };

  return (



    <>

    <div className="menudiv">
     
     <div className="listdiv">

     <li>Primary One</li>
     <li> Primary Two</li>
     <li> Primary Three</li>
     <li> Primary Four</li>
     <li> Primary Five</li>
     <li>Primary Six</li>
     <li> J.S.S One</li>
     <li>J.S.S Two</li>
     <li>J.S.S Three</li>

     

     </div>
    

    </div>
      <div className="overlay">
        <div className="closeBtnDiv">
          {" "}
          <IoRemoveCircle
            className="closeBtn"
            size={32}
            onClick={handleCloseTab}
          />
        </div>
      </div>{" "}
    </>
  );
};

export default Overlay;
