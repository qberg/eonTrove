import React, { useEffect, useState } from "react";
import Books from "../books/Books";

const Listopia = () => {
  return (
    <div className="p-4 container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-leto text-2xl">Listopia</h1>
        <div>Buttons for various lists goes here</div>
        <Books />
      </div>
    </div>
  );
};

export default Listopia;
