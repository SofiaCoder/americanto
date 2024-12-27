import SlideShow from '../SlideShow';

const images = [
  '/images/notesHeart.jpg',
  '/images/choir2.jpg',
  '/images/notes.jpg',
];

const Gallery = () => {
  return (
    <section id='gallery' data-section-class='even-section-bg'>
      {/* <h2>Gallery</h2> */}
      <div className='flex justify-center slide-in-right'>
        <SlideShow images={images} />
      </div>
    </section>
  );
};

export default Gallery;
