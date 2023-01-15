import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Categories() {
  return (
    <div className="md:container mx-auto mb-20 pt-10 px-6" id="categories">
      <h1 className="font-poppins text-5xl text-center mb-10">Categories</h1>

      <div className="grid lg:grid-cols-3 gap-8 grid-cols-1">
        <Link to="/category/sci-fi" className="h-80">
        <div class="h-full rounded-md bg-sci-fi bg-cover bg-center shadow-lg cursor-pointer">
          <div class="bg-black p-4 w-full h-full bg-opacity-60 relative">
            <h1 class=" text-2xl text-white font-black absolute top-[40%] left-[40%]">
              Sci-fi
            </h1>
          </div>
        </div>
        </Link>
        <Link to="/category/self-help" className="h-80">
        <div class="h-full rounded-md bg-self-help bg-cover bg-center shadow-lg cursor-pointer">
          <div class="bg-black p-4 w-full h-full bg-opacity-60 relative">
            <h1 class=" text-2xl text-white font-black absolute top-[40%] left-[40%]">
              Selp-help
            </h1>
          </div>
        </div>
        </Link>
        <Link to="/category/finance" className="h-80">
        <div class="h-full rounded-md bg-finance bg-cover bg-center shadow-lg cursor-pointer">
          <div class="bg-black p-4 w-full h-full bg-opacity-60 relative">
            <h1 class=" text-2xl text-white font-black absolute top-[40%] left-[40%]">
              Finance
            </h1>
          </div>
        </div>
        </Link>
        <Link to="/category/thrillers" className="h-80">
        <div class="h-full rounded-md bg-[url('./assets/thrillers.jpg')] bg-cover bg-center shadow-lg cursor-pointer">
          <div class="bg-black p-4 w-full h-full bg-opacity-60 relative">
            <h1 class=" text-2xl text-white font-black absolute top-[40%] left-[40%]">
              Thrillers
            </h1>
          </div>
        </div>
        </Link>
        <Link to="/category/fantasy" className="h-80">
        <div class="h-full rounded-md bg-fantasy bg-cover bg-center shadow-lg cursor-pointer">
          <div class="bg-black p-4 w-full h-full bg-opacity-60 relative">
            <h1 class=" text-2xl text-white font-black absolute top-[40%] left-[40%]">
            Fantasy
            </h1>
          </div>
        </div>
        </Link>
        <Link to="/category/others" className="h-80">
        <div class="h-full rounded-md bg-others bg-cover bg-center shadow-lg cursor-pointer">
          <div class="bg-black p-4 w-full h-full bg-opacity-60 relative">
            <h1 class=" text-2xl text-white font-black absolute top-[40%] left-[40%]">
            Others
            </h1>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
