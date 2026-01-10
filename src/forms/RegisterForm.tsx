import NotifyHandler from '@/components/NotifyHandler';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import InputBar from '@/forms/InputBar';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const { t } = useTranslation();
  const usernameRef = useRef<string>('');
  const passwordRef = useRef<string>('');
  const emailRef = useRef<string>('');

  const submitRegister: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative p-1 flex flex-col gap-1.5 z-0">
      <div className="w-11/12 h-80 sm:w-4/5 sm:h-72 md:w-6/7 lg:w-[1000px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600 opacity-90">
        <h2 className="italic text-base lg:text-lg text-red-600 text-center bg-black">
          {t(`System.CTRL`, { ns: 'umbrellaSecurity' })}
        </h2>
        <UmbrellaLabel title="SignUp" />
        <form
          className="md:flex md:flex-col md:gap-1.5"
          onSubmit={submitRegister}
        >
          <InputBar
            label="Username"
            t={t}
            inputRef={usernameRef}
            placeholder="At least 4 characters"
          />
          <InputBar
            label="Password"
            t={t}
            inputRef={passwordRef}
            placeholder="At least 4 characters"
          />
          <InputBar
            label="Email"
            t={t}
            inputRef={emailRef}
            placeholder="Optional"
          />
          <div className="text-center">
            <button className="w-20 mt-2 p-0.5 border-2 rounded-sm border-black bg-red-800 text-white hover:bg-red-600">
              {t('SignUp')}
            </button>
          </div>
        </form>
        <NotifyHandler />
        <p className="p-1 text-white">
          By creating an account, you agree to{' '}
          <Link
            className="text-red-600 hover:text-red-400"
            to="/private_policy"
          >
            our private policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
