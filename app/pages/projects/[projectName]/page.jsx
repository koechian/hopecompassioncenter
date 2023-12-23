import React from "react";

function Page({ params }) {

  const projectName = decodeURIComponent(params.projectName);


  return <div className="w-full flex flex-col bg-brown pt-20 pb-10 h-[100vh] items-center">
    <h1 className="text-5xl font-semibold text-cream">
      {projectName.toString()}
    </h1>


  </div>
}

export default Page;
