import * as React from "react";
import NewsletterForm from "./NewsletterForm";
import ImageColumn from "./ImageColumn";
import Rightmen from "../../assets/menRight.png"
import LeftWomen from "../../assets/left women.png"

function NewsletterLayout() {
  return (
    <div className="rounded-none">
      <div className="flex gap-5 max-md:flex-col">
        <ImageColumn 
          src={Rightmen}
          className="w-[27%]" 
          alt="Newsletter featured image"
        />
        <div className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
          <NewsletterForm />
        </div>
        <ImageColumn 
          src={LeftWomen} 
          className="w-3/12" 
          alt="Newsletter secondary image"
        />
      </div>
    </div>
  );
}

export default NewsletterLayout;