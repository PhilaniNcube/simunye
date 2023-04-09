"use client";

import { FormEvent, Fragment, useState } from "react";
import ResizablePanel from "./ResizeablePanel";
import herbs from "../data/herbs";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@radix-ui/react-icons";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


const PromptForm = () => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [question, setQuestion] = useState("");
  const [promptResponse, setPromptResponse] = useState("");
   const [selected, setSelected] = useState(herbs[3]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPromptResponse("");
    setLoading(true);

    const { prompt } = Object.fromEntries(new FormData(e.currentTarget));

    console.log({ prompt });

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        herb: selected
      }),
    });

    if (!response.ok) {
      setLoading(false);
      // throw new Error(response);
      console.log(response)
    }

    const data = response.body;
    if (!data) {
      return;
    }
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setLoading(false);

      setPromptResponse((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="py-10 mx-auto max-w-7xl grid grid-cols- md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="w-full py-10">
        <div className="flex flex-col">
          <label
            htmlFor="prompt"
            className="mb-2 text-sm font-bold leading-tight tracking-normal text-zinc-800"
          >
            What is your question?
          </label>
          <textarea
            id="prompt"
            rows={3}
            name="prompt"
            className="flex items-center w-full p-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded-md shadow  focus:outline-none focus:border focus:border-indigo-700"
          />
        </div>
        <div className="flex flex-col mt-4">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <Fragment>
                <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                  Herbs
                </Listbox.Label>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">{selected}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {herbs.map((herb) => (
                        <Listbox.Option
                          key={herb}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={herb}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">

                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {herb}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Fragment>
            )}
          </Listbox>
        </div>

        <button
          type="submit"
          className="px-6 py-2 mt-8 text-lg font-medium text-white bg-blue-600 rounded-md"
        >
          Submit
        </button>
      </form>

      <ResizablePanel>
        <div className="text-lg font-medium text-slate-700">
          <p className="text-2xl">Response:</p>
          {loading ? <div className="block">"Loading..."</div> : <div className="font-normal italic">{promptResponse}</div>}
        </div>
      </ResizablePanel>
    </div>
  );
};
export default PromptForm;
