import TopMessageBoard from '@/components/UmSysCtrl/TopMessageBoard';
import LoginForm from '@/forms/LoginForm';

const SignInPage = () => {
  return (
    <div className="w-screen h-dvh pt-4 bg-gray-400 dark:bg-red-900">
      <div className="hidden md:inline-block absolute w-1/2 top-48 left-28 z-0">
        <img
          className="object-contain border-2 border-transparent rounded-sm opacity-80"
          src="/images/laboratory_by_eiskalterengel18_df0owik.png"
        />
      </div>
      <TopMessageBoard />
      <LoginForm />
    </div>
  );
};

export default SignInPage;
