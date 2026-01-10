import TopMessageBoard from '@/components/UmSysCtrl/TopMessageBoard';
import RegisterForm from '@/forms/RegisterForm';

const SignUpPage = () => {
  return (
    <div className="w-screen h-screen pt-4 bg-gray-400 dark:bg-slate-800">
      <div className="hidden md:inline-block absolute md:w-1/2 top-28 left-20 z-0">
        <img
          className="border-2 border-sky-800 rounded-sm"
          src="/images/pexels-chokniti-khongchum-1197604-2280549.jpg"
        />
      </div>
      <TopMessageBoard />
      <RegisterForm />
    </div>
  );
};

export default SignUpPage;
