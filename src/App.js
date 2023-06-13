import { useEffect, useState } from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {

  const [data, setData] = useState(null)

  const getData = async () => {
    const resp = await fetch("http://localhost:9292")
    const respJson = await resp.text()
    setData(respJson)
  }

  useEffect(() => {
    getData()
  }, [])
  if (!data) {
    return <div>Loading ... </div>
  }
  
  return (
    <div className="">
      {/* topbar */}
      {/* <div className='bg-blue-100 leading-[60px] h-[60px]'> Topbar</div> */}
      {/* <div className='bg-blue-100 py-[15px]'> Topbar</div> */}
      <div className='bg-blue-100 flex py-[15px] px-[30px] justify-between'> 
        <div className='flex'> 
          <div>L - </div>
          <div>Hyderabad</div>
        </div>
        <div>+91965412345</div>
      </div>
      <header className='flex py-[15px] px-[30px] justify-between bg-gray-800 text-white'>
        <div className='flex items-center'>Studytap</div>
        <div className='gap-[100px] uppercase block sm:flex'>
          <div>Study material</div>
          <div>Buy Course</div>
          <div>Login</div>
        </div>
        {/* <div className='sm:hidden'>Menu</div> */}
      </header>
      {/* hero */}
      <div className="bg-[url('study.jpg')] bg-cover bg-bottom sm:flex min-h-[200px] py-[100px] px-[40px]">
        <div className='flex-1 flex justify-center flex-col items-center'>
          <div>Hello JEE Aspirants</div>
          <div>we are here to help you crack JEE mains</div>
        </div>
        <div className='flex-1 mt-[30px] sm:mt-0'>
          <div className='px-[20%]'>
            <div className='h-[300px] bg-white rounded-md'>
              Server says -{data}
            </div>
          </div>
        </div>
      </div>
      {/* Benefits */}
      <div className='md:flex justify-around mt-[50px] capitalize text-[18px]'>
        <div className='m-[40px] md:m-0'>
          <div>easy preperation</div>
          <div>help provided</div>
          <div>easy preperation</div>
          <div>help provided</div>
          <div>easy preperation</div>
          <div>help provided</div>
        </div>
        <div className='m-[40px] md:m-0'>
          <div>easy preperation</div>
          <div>help provided</div>
          <div>easy preperation</div>
          <div>help provided</div>
          <div>easy preperation</div>
          <div>help provided</div>
        </div>
        <div className='m-[40px] md:m-0'>
          <div>easy preperation</div>
          <div>help provided</div>
          <div>easy preperation</div>
          <div>help provided</div>
          <div>easy preperation</div>
          <div>help provided</div>
        </div>
      </div>
    </div>
  );
}

export default App;
