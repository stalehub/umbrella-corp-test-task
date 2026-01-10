import { TFunction } from 'i18next';
import { MutableRefObject } from 'react';

interface InoutProps {
  label: string;
  t: TFunction;
  inputRef: MutableRefObject<string>;
  placeholder?: string;
}

const InputBar = ({ label, t, inputRef, placeholder }: InoutProps) => {
  const placeHodervalue: string = placeholder || '';

  return (
    <div className="ml-1 grid-cols-1 sm:grid sm:grid-cols-3 sm:text-lg">
      <div className="italic sm:col-span-1 md:text-right">
        <label>{t(label, { ns: 'umbrellaSecurity' })}</label>
      </div>
      <div className="md:pl-2">
        <input
          className="w-5/6 sm:w-56 border-2 border-red-600 rounded-sm outline-none drop-shadow-sm"
          type="username"
          placeholder={placeHodervalue}
          defaultValue={inputRef.current}
          onChange={({ target }) => (inputRef.current = target.value)}
        />
      </div>
    </div>
  );
};

export default InputBar;
