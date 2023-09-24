import Form from "@/components/form/Form";
import Menu from "@/components/form/Menu";
import React from "react";

const Analysis = () => {
  return (
    <div className="flex p-10 gap-5 w-full h-full bg-gray-300">
      <div>
        <Menu />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Analysis;
