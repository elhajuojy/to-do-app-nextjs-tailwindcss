import React from 'react';

const Card = (props) => {
    return (
        <div className="flex justify-center  transition ease-in-out delay-150 ">
            <div className="block p-6 rounded-lg shadow-lg dark:bg-gray-900  max-w-sm">
                <h5 className="text-white text-xl leading-tight font-medium mb-2">{props.data.title}</h5>
                <p className="text-white text-base mb-4">
                    {props.data.content}
                </p>
                <button type="button" className=" inline-block px-6 py-1.5 bg-dark hover:bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
            </div>
        </div>
    );
};

export default Card;