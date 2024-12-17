import Image from 'next/image';

const conductorBox =
  'h-[40vh] relative aspect-[4/3] w-[40vw] flex items-end rounded-xl mt-6';
const conductorImage =
  'object-cover absolute hover:opacity-25 hover:ease-in duration-100 rounded-xl';

const Conductors = () => {
  return (
    <section id='conductors'>
      <h2>Våra Dirigenter</h2>
      <div className='flex mt-10 items-center'>
        <div className='m-10'>
          <h3>Johanna Pomo</h3>
          <div className={conductorBox}>
            <Image
              src='/images/Johanna.jpg'
              alt='Picture of Johanna'
              fill
              className={conductorImage}
            />
            <p className='p-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates obcaecati est officiis sequi soluta aperiam, vel error
              praesentium laudantium aut voluptatum vitae inventore alias
              accusantium amet repellat sint! Incidunt, architecto.
            </p>
          </div>
        </div>
        <div className='m-10'>
          <h3>Rolando Pomo</h3>
          <div className={conductorBox}>
            <Image
              src='/images/rolando.jpeg'
              alt='Picture of Rolando'
              fill
              className={conductorImage}
            />
            <p className='p-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates obcaecati est officiis sequi soluta aperiam, vel error
              praesentium laudantium aut voluptatum vitae inventore alias
              accusantium amet repellat sint! Incidunt, architecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Conductors;
