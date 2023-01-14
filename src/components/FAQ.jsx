import React, { useState } from 'react'

const FAQ = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <div style={{backgroundColor: "#071E22"}}>
            <h1 className="font-bold text-center text-5xl p-16" style={{color:'#E5F2FF'}}>FAQs</h1>
            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-40 my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen1(!open1)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                When and where will the technical fest be held?
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open1 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open1 ? "block" : "hidden"} p-4`}>
                        The technical fest will be held on the 23rd, 24th and 25th of January in the department of ISE.
                    </div>
                </div>
            </div>

            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-40 my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen2(!open2)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                What types of events and competitions will be held during the technical fest?
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open2 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open2 ? "block" : "hidden"} p-4`}>
                        The technical fest will typically include various events, such as coding competitions, pitch-an-idea, debates, and speaker sessions on various technical topics.
                    </div>
                </div>
            </div>

            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-40 my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen3(!open3)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                Can non-IT branch students participate in the technical fest?
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open3 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open3 ? "block" : "hidden"} p-4`}>
                        Yes, students of all departments are welcome to participate in the technical fest.
                    </div>
                </div>
            </div>

            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-40 my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen4(!open4)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                Will there be any prizes for the winners of the competitions?
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open4 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open4 ? "block" : "hidden"} p-4`}>
                        Yes, there will be prizes for the winners of the various competitions and events held during the technical fest.
                    </div>
                </div>
            </div>

            <div className="">

                <div className="rounded-md shadow-md bg-white border-t border-gray-200 w-3/4 mx-40 my-2" style={{backgroundColor: "#E5F2FF"}}>
                    <button
                        className="w-full text-left p-4"
                        onClick={() => setOpen5(!open5)}
                    >
                        <div className="flex items-center">
                            <div className="text-lg font-medium">
                                How can I register for the technical fest?
                            </div>
                            <div className="ml-auto">
                                <svg
                                    className={`h-6 w-6 transform ${open5 ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div className={`${open5 ? "block" : "hidden"} p-4`}>
                        Registration for the technical fest will typically be done online on the official website or through a designated registration form.
                    </div>
                </div>
            </div>

            <br/><br/><br/>

        </div>
    );
}

export default FAQ