import * as React from "react";
import { ProductCard } from "./ProductCard";
import Image from "next/image";
import Trendwomen from "../../assets/Trendwomen.png";
import Trendwomen2 from "../../assets/Trendwomen2.png";
import Trendmen from "../../assets/Trendwomenmen.png"

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
            <Image
              loading="lazy"
              src={Trendwomen}
              alt="Trend Vault featured product"
              className="object-contain z-0 max-w-full rounded-md aspect-[1.78] w-[666px]"
            />
            <Image
              loading="lazy"
              src={Trendwomen2}
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
          <Image
            loading="lazy"
            src={Trendmen}
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
