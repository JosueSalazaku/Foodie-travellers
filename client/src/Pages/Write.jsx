import { BsPlusCircleFill } from "react-icons/bs";

function Write() {
  return (
    <main className="mt-20 h-screen flex flex-col justify-start mx-20 gap-9 dark:text-white">
      <div className="flex flex-row gap-5">
          <button>
            <BsPlusCircleFill style={{ fontSize: "50px" }}  />
          </button>
        <textarea name="" id="" cols="30" rows="10" placeholder="Title" className="text-2xl h-14 bg-transparent items-center border-b-4 p-2"></textarea>
      </div>
      <textarea name="" id="" cols="30" rows="10" placeholder="Write your post here..." className="text-2xl ml-10 border border-white bg-transparent dark:border-black"></textarea>
    </main>
  )
}

export default Write