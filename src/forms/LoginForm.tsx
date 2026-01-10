import { tokenVar } from '@/apollo-cache/cache';
import NotifyHandler, { SendNotify } from '@/components/NotifyHandler';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import InputBar from '@/forms/InputBar';
import { LOGIN } from '@/graphql/mutations';
import { useMutation } from '@apollo/client';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const useUsername = useRef<string>('');
  const usePassword = useRef<string>('');

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      localStorage.setItem('token', token);
      // Update local state of token field
      tokenVar(token);

      navigate('/');
    }
  }, [result.data, navigate]);

  const submitLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    login({
      variables: {
        username: useUsername.current,
        password: usePassword.current,
      },
    });
  };

  const LoginButton = () => {
    if (result.loading) {
      return (
        <div className="flex justify-center text-white">
          {t('processing')}...
          <svg className="bg-red-600 animate-spin h-5 w-5 border-2 border-red-800 rounded-3xl bg-gradient-to-r from-red-400" />
        </div>
      );
    }

    return (
      <div className="text-center">
        <button className="w-20 mt-2 mb-2 p-0.5 border-2 rounded-sm border-black bg-red-800 text-white hover:bg-red-600">
          {t('SignIn')}
        </button>
      </div>
    );
  };

  return (
    <div className="relative p-1 flex flex-col gap-1.5 sm:gap-2 z-0">
      <div className="w-11/12 h-80 sm:w-4/5 sm:h-72 md:w-5/6 lg:w-[1000px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600 opacity-90">
        <h2 className="italic text-base lg:text-lg text-red-600 text-center bg-black">
          {t(`System.CTRL`, { ns: 'umbrellaSecurity' })}
        </h2>
        <UmbrellaLabel title="SignIn" />
        <form
          className="md:flex md:flex-col md:space-y-2"
          onSubmit={submitLogin}
        >
          <InputBar label="User" t={t} inputRef={useUsername} />
          <InputBar label="Password" t={t} inputRef={usePassword} />
          <LoginButton />
        </form>
        <NotifyHandler />
        <p className="p-1 text-white">
          By continuing, you agree to{' '}
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

export default LoginForm;
