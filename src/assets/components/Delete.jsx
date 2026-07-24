import { RiDeleteBinLine } from "react-icons/ri";

function Delete({ id, onDelete }) {
  return (
    <button
      onClick={() => onDelete(id)}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-300/60 text-red-600 shadow-sm transition duration-300 hover:scale-110 hover:bg-red-400"
    >
      <RiDeleteBinLine className="text-xl" />
    </button>
  );
}

export default Delete;