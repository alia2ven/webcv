
import React from 'react'

import avatar from "/assets/avatar.jpg"


function BodyComponent() {



  return (
<>
{/* Imagen de Fondo para toda la pagina*/}
<div class="bg-[url('/img/fondo3.png')] bg-cover bg-center bg-no-repeat h-screen">
  {/* Contenido de la página */}




<div className="mx-auto max-w-x py-32  ">



<div className="flex justify-center overflow-hidden p-4 ">


  <img
    alt="avatar"
  
    className="inline-block size-45 rounded-full ring-2 ring-red shadow-xl/60 transition delay-400 duration-500 ease-in-out transform hover:rotate-45  "
  src={avatar} />

{/* Esto es el pulso que titila */}
  <span class="relative flex size-3">
    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> 
    <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span></span>
</div>



<div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white ">
              Javier Viloria Olmos
            </h1>
            <p className="mt-8   text-pretty text-white ">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            </div>
       
 
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/578 w-144.5 -translate-x-1/2 bg-linear-to-tr  opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />




        </div>
      </div>
      </div>




</>

  )
}

export default BodyComponent


