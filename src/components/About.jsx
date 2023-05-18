import React, {useState} from 'react'
import './about.css'
const About = () => {
  const [currentDiv, setCurrentDiv] = useState(1);

  const nextDiv = () => {
    if (currentDiv === 3) return
    setCurrentDiv((prevDiv) => prevDiv + 1);
  };

  const prevDiv = () => {
    if (currentDiv < 2) return
    setCurrentDiv((prevDiv) => prevDiv - 1);
  };

  const items = [
    {id: '1', title: 'Who Are We', subtitle: 'Technology Company'},
    {id: '2', title: 'What we do', subtitle: 'Professional Brand Management'},
    {id: '3', title: 'Our Products', subtitle: 'Strategize, design, Collaborate'},
  ]
  return (
    <section className='p-4 md:p-8 max-w-5xl  mx-auto'>
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {
          items.map(i => (
            <div key={i.id} className="flex items-center justify-center flex-col w-100">
              <p className='title-color self-start pb-3 text-3xl font-bold'>{i.title}</p>

              <p className='self-start font-semibold text-md'>{i.subtitle}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus perspiciatis consequatur. Voluptate commodi porro voluptatum culpa exercitationem nemo distinctio ullam et.</p>
            </div>
          ))
        }  
      </div>

      <div className="md:hidden">
        {
          items.map(i => (
            <div className={`${i.id === String(currentDiv) ? 'active flex' : 'hidden'} items-center justify-center flex-col w-100`}>
              <p className='title-color self-start py-3 text-3xl font-bold'>{i.title}</p>

              <p className='self-start font-semibold text-md'>{i.subtitle}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus perspiciatis consequatur. Voluptate commodi porro voluptatum culpa exercitationem nemo distinctio ullam et.</p>

              <div className="navigation flex  justify-between w-full p-4 py-6">
                <div className="flex items-center">
                  <p className='font-bold text-xl mr-2'>{`0${currentDiv}`}</p>
                  <p className='text-sm'>/ 03</p>
                </div>

                <div className="">
                  <button
                    className='p-4 py-3 back__btn'
                    disabled={currentDiv === 1}
                    onClick={prevDiv}
                  >
                    &larr;
                  </button>
                  <button
                    className='p-4 py-3 next__btn'
                    onClick={nextDiv}
                    disabled={currentDiv === 3}
                  >
                      &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>



    </section>
  )
}

export default About