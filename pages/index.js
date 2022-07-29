import Head from 'next/head'
import Image from 'next/image'
import Nav from './components/Nav';
import { useState, useRef } from 'react'
import Card from './components/Card'
export default function Home() {
  const inputTitle = useRef();
  const inputContent = useRef();
  const [todolist, setTodo] = useState([]);

  console.log(todolist)
  function submitHandler(e) {
    e.preventDefault();
    if (inputContent.current.values == '' || inputTitle.current.value == '') {
      console.log(inputContent.current.value.isEmpty)
      console.log(inputTitle.current.value.isEmpty)
      console.log(inputTitle.current.value.isEmpty)

      return;
    }
    setTodo((prev) => [
      {
        title: inputTitle.current.value,
        content: inputContent.current.value

      },
      ...prev,
    ])
    // console.log(todolist)
    console.log(inputContent.current.value)
    console.log(inputTitle.current.value)
  }
  return (
    <div className='container mx-auto my-1  text-center '>
      <Nav />
      <form onSubmit={submitHandler} className='my-3'>
        <input ref={inputTitle} placeholder='write note title here ... ' className=' my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        <input type="textarea" ref={inputContent} placeholder='write note contant here ... ' className=' my-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        <button className=' dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Add</button>
      </form>
      <div className=' grid grid-cols-4 gap-4rounded px-3 py-3' >

        {
          todolist.map((item) => <Card data={item} key={item} />)
        }
      </div>


    </div >
  )
}
