import { RxCross1 } from "react-icons/rx";

const Modal = (props) => {

  return (
    <section className="bg-transparent flex justify-center items-center fixed inset-0 z-40">
      <div className="bg-gray-900 rounded-xl max-w-3xl p-4 mx-4 text-gray-100 animate-grow">
        <div className="flex justify-end mb-4">
          <button 
          onClick={() => props.toggleModal(false)}>
            <RxCross1 className="w-5 h-5" />
          </button>
        </div>
        <h1 className="text-center text-xl max-w-md mx-auto mb-12 font-serif">How likely are you to recommend FrontendPro to someone you know.</h1>
        <form className="px-4 sm:px-7">
          <div className="flex flex-wrap justify-center gap-4 mb-1.5">
            <RatingButtons />
          </div>
          <div className="flex justify-between mb-12 text-xs text-gray-400">
            <p>Not likely at all</p>
            <p>Extremely likely</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-2 justify-between mb-4">
            <button
              type="button"
              onClick={() => props.toggleModal(false)}
              className="min-w-[110px] border border-bluish-purple-500 hover:bg-bluish-purple-700 rounded p-2 text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="min-w-[110px] bg-bluish-purple-500 hover:bg-bluish-purple-700 rounded p-2 text-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

const ratingElements = [
  {
    id: "elem-1",
    value: 1
  },
  {
    id: "elem-2",
    value: 2
  },
  {
    id: "elem-3",
    value: 3
  },
  {
    id: "elem-4",
    value: 4
  },
  {
    id: "elem-5",
    value: 5
  },
  {
    id: "elem-6",
    value: 6
  },
  {
    id: "elem-7",
    value: 7
  },
  {
    id: "elem-8",
    value: 8
  },
  {
    id: "elem-9",
    value: 9
  },
  {
    id: "elem-10",
    value: 10
  },
]

const RatingButtons = () => {
  return (
    ratingElements.map(elem =>
      <label htmlFor={elem.id}>
        <input
          type="radio"
          name="rating"
          value={elem.value}
          id={elem.id}
          className="peer sr-only" />
        <div className="w-12 h-12 leading-[48px] bg-gray-800 border border-gray-700 rounded-md text-center text-gray-300 text-xl peer-checked:ring peer-checked:ring-white cursor-pointer">
          {elem.value}
        </div>
      </label>
    )
  );
}


export default Modal;