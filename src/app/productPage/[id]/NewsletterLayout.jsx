import * as React from "react";
import NewsletterForm from "./NewsletterForm";
import ImageColumn from "./ImageColumn";

function NewsletterLayout() {
  return (
    <div className="rounded-none">
      <div className="flex gap-5 max-md:flex-col">
        <ImageColumn 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a93d42dbb2dc8146053a84f9c28c38b729411c298239b1d445e40cb60424e0f5?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9" 
          width={50}
          height={20}
          className="w-[27%]" 
          alt="Newsletter featured image"
        />
        <div className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
          <NewsletterForm />
        </div>
        <ImageColumn 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd4fd0731ae206689d2d07a6afc4e09ed22014b8b039c6e3c738396cc62e4dc?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9" 
          className="w-3/12" 
          alt="Newsletter secondary image"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

export default NewsletterLayout;