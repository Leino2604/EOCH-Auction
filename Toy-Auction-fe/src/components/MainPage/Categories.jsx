import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Trang phục",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Đồ điện tử",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Xe hơi",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Đồ chơi",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Quà tặng",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Dụng cụ nghệ thuật",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Đồ dùng làm đẹp",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Sản phẩm cho bé",
    },
  ];

  const topData = data.slice(0, 3);

  return (
    <>
      <div className="category">
        <div className="f_flex mx-[15px] my-0 px-[5px] py-[10px] gap-4 items-center">
          <img src="./images/category/cat12.png" alt="" />
          <input type="search" name="search" id="search" className="w-full h-[20px] border border-solid"/>
        </div>
        {topData.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>  
          );
        })}
      </div>
    </>
  );
};

export default Categories;
