import React from "react";
import Delete from "./Delete";
import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";
import {
  RiBriefcaseLine,
  RiMapPinLine,
  RiCalendarLine,
} from "react-icons/ri";

function Usercard({ user,onDelete }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">

      {/* Edit va Delete button */}
      <div className="absolute right-4 top-4 z-10 flex gap-2">

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-gray-600 shadow-sm transition duration-300 hover:scale-110 hover:bg-white">
          <RiPencilLine className="text-xl" />
        </button>

        <Delete
           id={user.id}
           onDelete={onDelete}
        />

      </div>

      {/* User image */}
      <div className="relative mx-auto w-fit">
        <img
          src={user.image}
          alt={user.firstName}
          className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg transition duration-300 group-hover:scale-105"
        />

        {/* Online circle */}
        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-xl font-bold text-[#064b28] transition group-hover:text-white">
        {user.firstName} {user.lastName}
      </h2>

      {/* User information */}
      <div className="mt-6 space-y-3 text-left">

        <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 text-gray-600 shadow-sm transition hover:bg-white">
          <RiBriefcaseLine className="text-xl text-[#08752f]" />
          <span className="truncate">{user.job}</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 text-gray-600 shadow-sm transition hover:bg-white">
          <RiMapPinLine className="text-xl text-[#08752f]" />
          <span>{user.city}</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 text-gray-600 shadow-sm transition hover:bg-white">
          <RiCalendarLine className="text-xl text-[#08752f]" />
          <span>{user.age} years old</span>
        </div>

      </div>

    </div>
  );
}

export default Usercard;