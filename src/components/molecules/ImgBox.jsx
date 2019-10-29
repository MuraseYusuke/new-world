import React from 'react';
import { defaultProps, compose } from 'recompose';
 
const ImgBox = compose(
   defaultProps({
       height: 100,
       width: 80
   })
)(
   function ImgBox(props) {
       const {
           src,
           width,
           height,
       } = props;
       return (
               <div
                   style={{
                       paddingLeft: 4,
                       paddingRight: 4,
                       borderLeft: "solid 2px #ffffff",
                       borderRight: "solid 2px #ffffff",
                   }}
               >
                   <div
                       style={{
                           height: height,
                           width: width,
                           objectFit: "cover",
                           border: "solid 1px #ffffff",
                       }}
                   >
                       <img
                           src={src}
                           style={{
                               maxHeight: "100%",
                               maxWidth: "100%",
                           }}
                       />
                   </div>
               </div>
       );
   }
);
 
export default ImgBox;
