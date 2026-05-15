import React from "react";
import Sidebar from "@/app/components/layout/sidebar";
import Rightsidebar from "@/app/components/layout/right-sidebar";
import Feed from "@/app/components/feed/feed-list";

function page() {
  return (
    <div className="bg-bg text-font flex justify-center pt-10">
      <div className="flex justify-between w-2/3 gap-5">
        <Sidebar />
        <Feed />
        <Rightsidebar />
      </div>
    </div>
  );
}

export default page;
