import Image from 'next/image';

const images = [
  '/images/notesHeart.jpg',
  '/images/choir2.jpg',
  '/images/notes.jpg',
];

const Gallery = () => {
  return (
    <section id='gallery'>
      <h2>Gallery</h2>
      <div className='my-10 flex gap-5'>
        {images.map((image, index) => (
          <Image key={index} src={image} alt='notes' width={400} height={400} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
