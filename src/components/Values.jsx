import React from 'react'
import values from '../assets/values.svg'
import './values.css'
const Values = () => {
  const ourValues = [
    {id: '1', title: 'dedication'},
    {id: '2', title: 'intelectual honesty'},
    {id: '3', title: 'curiosity'},
  ]
  return (
    <section className='values py-8 px-4'>
      <div className='p-4 pt-0 max-w-5xl  mx-auto'>
        <h3 className='font-bold text-2xl mb-4 text-center title-color'>OUR CORE VALUES</h3>

        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iste sed quae dolor voluptatum facere quidem doloribus eos repellendus? Doloribus reprehenderit incidunt quaerat error, veniam cupiditate non soluta aliquam perferendis rro quas quia ex autem beatae. Officiis voluptas quos iusto tenetur illum dolorum quam fugiat?</p>

        <div className="grid md:grid-cols-3 gap-3 mb-6 md:mb-0">
          {
            ourValues.map(i => (
              <div key={i.id} className="flex justify-center flex-col w-100">
                <div className="flex">
                <div className="w-8 self-center mr-4 border-black border-solid border-b-2"></div>
                <p className='self-start py-4 text-2xl font-semibold capitalize'>{i.title}</p>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus perspiciatis consequatur. Voluptate commodi porro voluptatum culpa exercitationem nemo distinctio ullam et.</p>
              </div>
            ))
          }
      
      
        </div>
          
        <img src={values} alt="values"className='md:hidden' />

      </div>
    </section>
  )
}

export default Values