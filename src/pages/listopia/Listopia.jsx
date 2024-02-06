import React, { useEffect, useState } from "react";
import Books from "../books/Books";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Listopia = () => {
  return (
    <div className="p-4 container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-leto text-2xl">Listopia</h1>
        <div>
          <Button 
            className="mt-2"
          >
            <Link to="/books">Books</Link> 
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Listopia;
