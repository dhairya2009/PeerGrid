"use client";

import React from "react";
import { IoIosTrendingUp, IoIosRocket } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { CgWebsite } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

// 1. Array for Trending Colleges data
const TRENDING_COLLEGES = [
  { shortName: "NST", fullName: "Newton School Of ...", count: "412 Students" },
  {
    shortName: "SST",
    fullName: "Scaler School Of ....",
    count: "432 Students",
  },
  { shortName: "MU", fullName: "Master's Union", count: "222 Students" },
  { shortName: "PU", fullName: "Plaksha University", count: "192 Students" },
];

// 2. Array for Communities data
const COMMUNITIES = [
  { name: "Web Dev Builder", count: "412 members", icon: <CgWebsite /> },
  { name: "AI ML Circle", count: "432 members", icon: <FaRobot /> },
  { name: "Startup Founders", count: "222 members", icon: <IoIosRocket /> },
];

// Common card layout styling to remove duplicate classes
const CARD_CLASS =
  "bg-cardbg p-3 rounded-2xl border-[#6974892d] border-1 flex flex-col";
const LIST_ITEM_CLASS =
  "flex hover:bg-[#1a1e27] hover:cursor-pointer duration-300 rounded-2xl p-2 items-center";

function RightSidebar() {
  return (
    <div className="xl:w-1/5 xl:flex lg:hidden hidden flex-col gap-3">
      {/* --- TRENDING COLLEGES --- */}
      {/* <motion.div
        initial={{ opacity: 0, x: +30 }} // Start low and invisible
        whileInView={{ opacity: 1, x: 0 }} // Animate to position when scrolled into view
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      > */}
        <div className={CARD_CLASS}>
          <div className="text-[13px] text-[#697489] flex font-semibold items-center">
            <div className="mx-2 text-primary text-[15px]">
              <IoIosTrendingUp />
            </div>
            Trending Colleges
          </div>

          <div className="flex flex-col gap-1 mt-2">
            {TRENDING_COLLEGES.map((college) => (
              <div key={college.shortName} className={LIST_ITEM_CLASS}>
                <div className="bg-primary mr-2 w-10 h-10 rounded-xl flex items-center justify-center text-[10px] font-bold shrink-0">
                  {college.shortName}
                </div>
                <div>
                  <div className="text-[13px] font-semibold line-clamp-1">
                    {college.fullName}
                  </div>
                  <p className="text-[10px] text-[#697489]">{college.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* </motion.div> */}
      {/* --- COMMUNITIES --- */}
      {/* <motion.div
        initial={{ opacity: 0, x: +30 }} // Start low and invisible
        whileInView={{ opacity: 1, x: 0 }} // Animate to position when scrolled into view
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      > */}
        <div className={CARD_CLASS}>
          <div className="text-[13px] text-[#697489] flex font-semibold items-center">
            <div className="mx-2 text-primary text-[15px]">
              <RxPeople />
            </div>
            COMMUNITIES
          </div>

          <div className="flex flex-col gap-1 mt-2">
            {COMMUNITIES.map((community) => (
              <div key={community.name} className={LIST_ITEM_CLASS}>
                <div className="flex items-center justify-center w-10 h-10 text-[20px] text-primary shrink-0">
                  {community.icon}
                </div>
                <div>
                  <div className="text-[13px] font-semibold">
                    {community.name}
                  </div>
                  <p className="text-[10px] text-[#697489]">
                    {community.count}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 text-[12px] text-primary font-bold text-center w-full hover:underline">
            <Link href="/community">SEE ALL</Link>
          </div>
        </div>
      {/* </motion.div> */}
    </div>
  );
}

export default RightSidebar;
