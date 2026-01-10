import { IDocument } from '@/@types/types';
import { Docs } from '@/dummyData';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Archive = () => {
  const { id } = useParams();
  const document = Docs.find((e) => e.id === id);
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (!document) {
    return (
      <div className="w-screen h-screen bg-black">
        <p>Not found. The file may has been deleted.</p>
      </div>
    );
  }

  const { content, date, imgUrls }: IDocument = document;
  const totalLength = content.length;
  const hasPrev: boolean = currentPage > 1;
  const hasNext: boolean = currentPage < totalLength;

  const turnToPage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    switch (e.currentTarget.value) {
      case 'prev':
        if (hasPrev) {
          setCurrentPage(currentPage - 1);
        }
        break;
      case 'next':
        if (hasNext) {
          setCurrentPage(currentPage + 1);
        }
        break;
    }
  };

  const { title } = content[0];
  const {
    pageNum,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
  } = content[currentPage - 1];

  return (
    <div className="w-screen min-h-screen bg-black flex flex-col space-y-2 font-serif">
      <div className="w-11/12 md:w-5/6 h-fit m-auto opacity-90 italic text-sm sm:text-base text-stone-400 dark:text-white">
        <div className="pt-1">
          <p>Date: {date}</p>
          <h3 className="text-orange-300">{title && title}</h3>
          {imgUrls &&
            imgUrls.map((e, i) => (
              <img
                className="w-40 sm:w-44 md:w-80 lg:w-96"
                key={i}
                src={e}
                alt={`archive-image${i}`}
              />
            ))}
        </div>
        <div>
          <p>{paragraph1}</p>
          <br />
          <p>{paragraph2 && paragraph2}</p>
          <br />
          <p>{paragraph3 && paragraph3}</p>
          <br />
          <p>{paragraph4 && paragraph4}</p>
          <br />
          <p>{paragraph5 && paragraph5}</p>
          <br />
          <div className="flex justify-center gap-2">
            <p className="text-center">
              {pageNum} / {totalLength}
            </p>
          </div>

          <button
            className={`absolute text-stone-200 left-4 sm:left-12 lg:left-20 drop-shadow ${
              !hasPrev && 'hidden'
            } `}
            value="prev"
            onClick={turnToPage}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Prev
          </button>
          <button
            className={`absolute text-stone-200 right-4 sm:right-12 lg:right-20 drop-shadow ${
              !hasNext && 'hidden'
            }`}
            value="next"
            onClick={turnToPage}
          >
            Next
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="h-10 flex justify-center">
        <Link
          className="h-6 border-2 border-stone-600 bg-red-800 text-white hover:bg-red-600"
          to="/security/archives"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Archive;
