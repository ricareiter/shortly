"use client";
import { useState } from "react";

const Shorten = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState("");

  function validURL(str: string) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  }

  function handleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (e.target[0].value === "") {
      setErrorMessage(true);
      setMessage("Please enter something");
      return;
    } else if (!validURL(e.target[0].value)) {
      setErrorMessage(true);
      setMessage("Please enter a valid URL");
      return;
    }

    setMessage("");
    setErrorMessage(false);
  }

  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          onSubmit={handleForm}
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${
              errorMessage ? "border-red" : ""
            }`}
            placeholder="Shorten a link here"
          />
          <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
            Shorten It!
          </button>

          {errorMessage ? (
            <div className="absolute left-7 bottom-3 text-red text-sm italic">
              {message}
            </div>
          ) : (
            ""
          )}
        </form>
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://frontendmentor.io
          </p>
          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">https://rel.ink/k4IKyl</div>
            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://twitter.com/frontendmentor
          </p>
          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">https://rel.ink/gxOXp9</div>
            <button className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p className="font-bold text-center text-veryDarkViolet md:text-left">
            https://linkedin.com/frontendmentor
          </p>
          <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div className="font-bold text-cyan">https://rel.ink/gob3X9</div>
            <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
