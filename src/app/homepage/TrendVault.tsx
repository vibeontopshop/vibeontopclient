import * as React from "react";
import { ProductCard } from "./ProductCard";

const productData = [
  {
    title: "Jacquard Fabric",
    number: "03",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7514709ca569f62fd7bb6cec6a11e659fd875b0cb905c81e380197b91d6a844?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
  },
  {
    title: "Jacquard Fabric",
    number: "03",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7514709ca569f62fd7bb6cec6a11e659fd875b0cb905c81e380197b91d6a844?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
  },
  {
    title: "Jacquard Fabric",
    number: "03",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7514709ca569f62fd7bb6cec6a11e659fd875b0cb905c81e380197b91d6a844?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
  }
];

export default class TrendVault extends React.Component {
  render() {
    return (
      <div className="flex relative flex-col items-start">
        <div className="z-0 self-stretch text-8xl leading-tight uppercase max-md:text-4xl" style={{ color: '#CEB863' }}>
          Trend Vault
        </div>
        <div className="flex relative z-0 gap-8 items-start mt-16 max-w-full w-[1357px] max-md:mt-10">
          <div className="flex relative z-0 flex-col min-w-[240px] w-[666px] max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/870c079b3e6a574a2d3aac0ba3913700bd98f069e335baab67c45f1c8743b21a?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
              alt="Trend Vault featured product"
              className="object-contain z-0 max-w-full rounded-md aspect-[1.78] w-[666px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00e2882d3224b98aeaf2059de3d0ed0ec3f861a95808750fd82698192525331?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
              alt="Trend Vault featured product"
              className="object-contain z-0 mt-8 max-w-full rounded-md aspect-[1.78] w-[666px]"
            />
            <div className="flex absolute left-0 bottom-10 z-0 flex-col max-w-full h-[204px] w-[543px]">
              <ProductCard {...productData[0]} />
            </div>
            <div className="flex absolute left-0 z-0 flex-col max-w-full h-[204px] top-[130px] w-[543px]">
              <ProductCard {...productData[1]} />
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec2cc20923b386fe87b6c3d87a0ebd9c08695fc74c58ea20da839926609a267b?placeholderIfAbsent=true&apiKey=bee90f4503074c6fb2a2afcb7f5d52b9"
            alt="Trend Vault featured collection"
            className="object-contain z-0 flex-1 shrink self-stretch w-full rounded-md aspect-[0.84] basis-0 min-w-[240px] max-md:max-w-full"
          />
          <div className="flex absolute bottom-20 z-0 flex-col h-[204px] min-w-[240px] right-[116px] w-[543px] max-md:max-w-full">
            <ProductCard {...productData[2]} />
          </div>
        </div>
        <button
          className="absolute gap-2.5 self-stretch px-14 py-5 max-w-full h-14 text-base font-medium leading-none text-center text-white rounded-xl min-h-[56px] right-[111px] shadow-[0px_20px_35px_rgba(0,0,0,0.15)] top-[102px] w-[207px] max-md:px-5"
          style={{ backgroundColor: '#CEB863' }}
          aria-label="Shop now"
        >
          SHOP NOW
        </button>
      </div>
    );
  }
}
