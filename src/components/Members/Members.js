import './Members.css';
import React, { useState, useEffect } from 'react';
import teamImagesData from './team_images.json';
import Header from '../otherComponents/navbar';

function Members() {
  const numRepetitions = 5;
  const [images, setImages] = useState([]);
  const folders = [
    { name: 'Core Team', label: 'Folder 1' },
    { name: 'Technical Team', label: 'Folder 2' },
    { name: 'Design Team', label: 'Folder 3' },
    { name: 'Management Team', label: 'Folder 4' },
    { name: 'Social Media Team', label: 'Folder 4' },
    { name: 'Content and Documentation Team', label: 'Folder 6' },
    { name: 'Sponsorship and Public Relations Team', label: 'Folder 7' },
  ];

  const teamHeadsInfo1 = [
    'Sponsorship Lead',
    'Social Media Lead',
    
  ];

  const teamHeadsInfo2 = [
    'Content Lead',
    'Technical Lead'
  ];

  const teamHeadsInfo3 = [
    'Management Lead',
    'Design Lead'
  ];

  useEffect(() => {
    const loadImages = async () => {
      try {
        if (!Array.isArray(teamImagesData)) {
          console.error("teamImagesData is not an array.");
          return [];
        }

        const loadedImages = [];

        for (const folder of folders) {
          const folderName = folder.name;
          const folderData = teamImagesData.find((data) => data.folderName === folderName);

          if (folderData) {
            const imagesWithNames = folderData.images.map((image) => ({
              url: image.url,
              name: image.name, // Include the image name
            }));

            console.log("Images with Names:", imagesWithNames); // Log images with names for debugging

            loadedImages.push(imagesWithNames);
          } else {
            loadedImages.push([]);
          }
        }

        setImages(loadedImages);
      } catch (error) {
        console.error('Error loading team images:', error);
        setImages([]);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    const setImageCounts = () => {
      folders.forEach((folder, index) => {
        const imageCount = images[index] ? images[index].length : 0;
        const scrollClass = document.querySelector(`.actual-scroll[data-folder-index="${index}"]`);

        if (scrollClass) {
          if (folder.name === 'Sponsorship and Public Relations Team') {
            scrollClass.classList.add('no-scrolly');
            scrollClass.classList.remove('actual-scroll');

          }

          else {
            scrollClass.classList.remove('no-scroll');
          }
        }
      });
    };

    setImageCounts();
  }, [folders, images]);

  <Header />

  return (
    
    <div className='App bg-center bg-no-repeat bg-fixed flex justify-center items-center' style={{ backgroundImage: 'url("../assets/member-bg.png")' }}>
      <div className='m-4'>
        <div className='mt-20' />
        <div className=' sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-blue-500 text-center whitespace-nowrap'>The Team</div>
        <div className=' sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-gray-500 text-center whitespace-nowrap'>Presenting The Board of 2023 - 2024</div>
        <div className='mb-12'></div>
        <div className=' sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-blue-500 text-center whitespace-nowrap'>GDSC LEAD</div>
        <div className='m-3' />
        <img
          src={'../images/TeamPhotos/Core Team/Akshat Vashisht.JPG'}
          alt='GDSC Lead'
          className='p-0 m-auto'
          style={{
            borderRadius: '20%',
            width: '40vw',
            height: '40vw',
            maxWidth: '290px',
            maxHeight: '280px',
            backgroundAttachment: 'cover',
            border: '0.3rem solid rgb(211, 211, 211)',
            boxShadow: '0.2vw 0.2vw rgba(97, 97, 97, 0.363), 0.4vw 0.4vw rgba(43, 138, 150, 0.3), 0.6vw 0.6vw rgba(0, 0, 0, 0.078)'
          }}
        />
        <div className='m-4' />
        <div className=' sm:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-semibold text-blue-500 text-center whitespace-nowrap'>Akshat Vashist</div>
        <div className=' sm:text-sm md:text-base lg:text-lg xl:text-l 2xl:text-l font-medium text-gray-500 text-center whitespace-nowrap'>(GDSC LEAD 2023 - 2024)</div>
        <div className='m-16' />

        <div className=' sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-blue-500 text-center whitespace-nowrap'>Faculty Coordinator</div>
        <div className='m-3' />
        <img
          src={'../images/TeamPhotos/Faculty Coordinator/DSC_6665.png'}
          alt='GDSC Lead'
          className='p-0 m-auto'
          style={{
            borderRadius: '20%',
            width: '40vw',
            height: '40vw',
            maxWidth: '290px',
            maxHeight: '280px',
            border: '0.3rem solid rgb(211, 211, 211)',
            boxShadow: '0.2vw 0.2vw rgba(97, 97, 97, 0.363), 0.4vw 0.4vw rgba(43, 138, 150, 0.3), 0.6vw 0.6vw rgba(0, 0, 0, 0.078)'
          }}
        />
        <div className='m-4' />
        <div className=' sm:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-semibold text-blue-500 text-center whitespace-nowrap'>Prof. Rajkumar Patil</div>
        <div className='m-20' />
        <div className="vertical-container">
          {folders.map((folder, index) => (
            <div key={index}>
              <div className='row-length'>{folder.name}</div>
              <div className={`${folder.name === 'Core Team' ? 'horizontal-container' : 'horizontal-scroll-container'}`}>
                {/* Render images for Core Team */}
                {folder.name === 'Core Team' && (
                  <>
                    <div className={`no-scroll`} data-folder-index={index}>
                      {images[index] ? (
                        images[index].slice(0, images[index].length / 3).map((image, imgIndex) => (
                          <figure className={`image-column${folder.name === 'Core Team' ? ' actual-glow ' : ''}`} key={imgIndex}>
                            <img src={image.url} alt={`Image ${imgIndex}`} />
                            <figcaption className="figcapspecial">{image.name}</figcaption>
                            <figcaption className="figcapspecial2">{teamHeadsInfo1[imgIndex]}</figcaption>
                          </figure>
                        ))
                      ) : (
                        <div>No images available for this folder</div>
                      )}
                    </div>
                    <div className={`no-scroll`} data-folder-index={index}>
                      {images[index] ? (
                        images[index].slice(images[index].length / 3, (images[index].length * 2) / 3).map((image, imgIndex) => (
                          <figure className={`image-column${folder.name === 'Core Team' ? ' actual-glow' : ''}`} key={imgIndex}>
                            <img src={image.url} alt={`Image ${imgIndex}`} />
                            <figcaption className="figcapspecial">{image.name}</figcaption>
                            <figcaption className="figcapspecial2">{teamHeadsInfo2[imgIndex]}</figcaption>
                          </figure>
                        ))
                      ) : (
                        <div>No images available for this folder</div>
                      )}
                    </div>
                    <div className={`no-scroll`} data-folder-index={index}>
                      {images[index] ? (
                        images[index].slice((images[index].length * 2) / 3).map((image, imgIndex) => (
                          <figure className={`image-column${folder.name === 'Core Team' ? ' actual-glow' : ''}`} key={imgIndex}>
                            <img src={image.url} alt={`Image ${imgIndex}`} />
                            <figcaption className="figcapspecial">{image.name}</figcaption>
                            <figcaption className="figcapspecial2">{teamHeadsInfo3[imgIndex]}</figcaption>
                          </figure>
                        ))
                      ) : (
                        <div>No images available for this folder</div>
                      )}
                    </div>
                  </>
                )}
          {/* Render images for other folders */}
          {folder.name !== 'Core Team' && folder.name !== 'Sponsorship and Public Relations Team' && (
            Array.from({ length: numRepetitions }).map((_, repetitionIndex) => (
              <div
                key={repetitionIndex}
                className={`${folder.name === 'Core Team' ? 'no-scroll' : 'actual-scroll'
                  }`}
                data-folder-index={index}
              >
                {images[index] ? (
                  images[index].map((image, imgIndex) => (
                    <figure className={`image-column${folder.name === 'Core Team' ? ' actual-glow' : ''}`} key={imgIndex}>
                      <img src={image.url} alt={`Image ${imgIndex}`} />
                      <figcaption className="image-name">{image.name}</figcaption>
                    </figure>
                  ))
                ) : (
                  <div>No images available for this folder</div>
                )}
              </div>
            ))
          )}

          {/* Render images for Sponsorship and Public Relations Team */}
          {folder.name === 'Sponsorship and Public Relations Team' && (
            <div className={`no-scrolly`} data-folder-index={index}>
              {images[index] ? (
                images[index].map((image, imgIndex) => (
                  <figure className={`image-column${folder.name === 'Sponsorship and Public Relations Team' ? ' actualy-glow' : ''}`} key={imgIndex}>
                    <img src={image.url} alt={`Image ${imgIndex}`} />
                    <figcaption className="image-name">{image.name}</figcaption>
                  </figure>
                ))
              ) : (
                <div>No images available for this folder</div>
              )}
            </div>
          )}

        </div>
      </div>
          ))}
    </div>
      </div >
    </div >
  );
}

export default Members;
