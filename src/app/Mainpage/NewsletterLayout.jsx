import * as React from "react";
import NewsletterForm from "./NewsletterForm";
import Image from "next/image";
import Rightmen from "../../assets/menRight.png";
import LeftWomen from "../../assets/left women.png"; 

function NewsletterLayout() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
        
        <Image 
          src={Rightmen}
          className="w-[40%] sm:w-[30%] md:w-[20%] max-w-[200px] sm:max-w-[250px]"
          alt="Newsletter featured image"
          priority
        />
        <div className="flex flex-col w-full max-w-lg space-y-4 sm:space-y-0 text-center">
          <NewsletterForm />
        </div>
        <Image 
          src={LeftWomen} 
          className="w-[40%] sm:w-[30%] md:w-[20%] max-w-[200px] sm:max-w-[250px]"
          alt="Newsletter secondary image"
          priority
        />
        
      </div>
    </div>
  );
}

export default NewsletterLayout;
