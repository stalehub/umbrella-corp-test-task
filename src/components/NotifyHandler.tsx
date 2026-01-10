import { notifyVar } from '@/apollo-cache/cache';
import { useReactiveVar } from '@apollo/client';

export const SendNotify = ({
  message,
  success,
}: {
  message: string;
  success?: boolean;
}) => {
  notifyVar({ message, success: success || false });
  setTimeout(() => {
    notifyVar({ message: '' });
  }, 5000);
};

const NotifyHandler = () => {
  const { message, success } = useReactiveVar(notifyVar);

  if (!message) {
    return null;
  }

  const color = success ? 'green-600' : 'red-600';

  return (
    <div
      className={`w-6/7 m-1 p-1 border-2 border-${color} bg-yellow-200 text-sm sm:text-base text-${color}`}
    >
      {message}
    </div>
  );
};

export default NotifyHandler;
