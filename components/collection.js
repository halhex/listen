function Collection({ title }) {
   return (
      <main className='collection'>
         <h1>{title}</h1>
         <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas, adipisci.
         </p>
         <ol className='tracks'>
            <li className='track'>
               <span className='number'>1</span>
               <p className='title'>Lamp lady</p>
               <p className='artist'>Svedaliza</p>
            </li>
            <li className='track'>
               <span className='number'>2</span>
               <p className='title'>Lamp lady</p>
               <p className='artist'>
                  Lorem ipsum dolor sit amet consectetur
               </p>
            </li>
            <li className='track'>
               <span className='number'>17</span>
               <p className='title'>Lamp lady</p>
               <p className='artist'>Svedaliza</p>
            </li>
         </ol>
      </main>
   )
}

export default Collection
