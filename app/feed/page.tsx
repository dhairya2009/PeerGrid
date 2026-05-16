import React from "react";
import Sidebar from "@/app/components/layout/sidebar";
import Rightsidebar from "@/app/components/layout/right-sidebar";
import Feed from "@/app/components/feed/feed-list";
import Navbar from "@/app/components/layout/navbar";

function page() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-bg text-font flex justify-center pt-5">
        <div className="flex justify-between xl:w-4/5 w-full gap-5 mx-4">
          <Sidebar />
          <Feed />
          <Rightsidebar />
        </div>
      </div>
    </div>
  );
}

export default page;
