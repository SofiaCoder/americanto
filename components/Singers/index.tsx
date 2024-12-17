import SingerBox from '../SingerBox';
const singersArray = [
  { name: 'Sofia', imagePath: '/images/notes.jpg', text: 'Bla bla bla bla' },
  { name: 'Cristina', imagePath: '/images/cristina.jpg', text: 'Bladibla bla' },
  { name: 'Cris', imagePath: '/images/cristina.jpg', text: 'Bladibla bla' },
  { name: 'Titi', imagePath: '/images/cristina.jpg' },
];

const Singers = () => {
  return (
    <section id='singers'>
      <h2>Våra Sångare</h2>
      <div className='flex gap-10'>
        {singersArray.map((singer) => (
          <SingerBox
            key={singer.name}
            name={singer.name}
            imgPath={singer.imagePath}
            text={singer.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Singers;
