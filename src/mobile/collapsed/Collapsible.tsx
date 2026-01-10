import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useEffect, useRef, useState } from 'react';

const Collapsible = (props: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  // Using useRef get access to the DOM
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleTouchOutside(event: TouchEvent) {
      if (!open) {
        // if collapsed bar is closed, then do nothing.
        return;
      }
      // The listener is not called if the event is triggered on a
      // non-element target. e.g.: document.body.firstChild.click().
      // also see https://github.com/Microsoft/TypeScript/issues/29540
      if (event.target instanceof HTMLElement) {
        const { target } = event;
        if (wrapperRef.current && !wrapperRef.current.contains(target)) {
          setOpen(!open);
        }
      }
    }
    // attaches an eventListener to listen when componentDidMount
    document.addEventListener('touchstart', handleTouchOutside);

    return () => {
      // optionally returning a func in useEffect runs like
      // componentWillUnmount to cleanup
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="z-10" ref={wrapperRef}>
      <button
        className="w-8 sm:w-10 border-2 border-transparent rounded-sm text-black cursor-pointer dark:text-white hover:bg-red-500 focus:border-red-600"
        onClick={handleToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={`fixed w-28 h-96 sm:36 md:40 z-1 top-0 right-0 text-sm text-black overflow-x-hidden transition ease-in-out duration-300 bg-gray-400 opacity-95 ${
          open ? 'translate-x-0' : 'translate-x-40'
        }`}
      >
        <button
          className="absolute w-5 h-5 text-md sm:w-8 sm:h-8 sm:text-xl text-white mt-0 top-0 right-0 bg-red-800"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Collapsible;
