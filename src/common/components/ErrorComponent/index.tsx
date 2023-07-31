import React from "react";
import styles from "@styles/ErrorComponent.module.css";
import Image from "next/image";

const ErrorComponent = ({ error }: { error: any }) => {
  console.log(error);
  
  let message = error.message;
  
  if(error?.response?.status===403){
    message = "Rate Limit Exceeded, Please come back after an hour";
  } 
  
  
  return (
    <div className={styles.ec984root}>
      <div className={styles.ec843message}>ERROR: {message}</div>
      <div className={styles.ec885imgPar}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/579/357/small_2x/alert-icon-website-error-attention-danger-exclamation-mark-precaution-line-style-design-free-vector.jpg"
          alt="error"
          className={styles.ec845image}
        />
      </div>
    </div>
  );
};

export default ErrorComponent;
