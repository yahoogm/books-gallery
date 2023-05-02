import Button from '@/components/atoms/Button/Button.atom';
import Input from '@/components/atoms/Input/Input.atom';
import { FaGoogle } from 'react-icons/fa';

const FormSignIn = () => {
  return (
    <div>
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-semibold">Welcome Back</h2>
        <h3 className="text-gray-400">Please enter your details</h3>
      </div>

      <div className="space-y-4 mb-10">
        <Input type={'email'} placeholder={'Enter your email'} style={'input-bordered'} />
        <Input type={'password'} placeholder={'Enter your password'} style={'input-bordered'} />
      </div>

      <div className="flex flex-col w-full border-opacity-50">
        <Button text={'Sign In'} variant={'btn-primary w-full'} />
        <div className="divider text-gray-400">OR</div>
        <Button variant={'btn-secondary w-full space-x-2'}>
          <FaGoogle size={20} />
          <span>Sign In With Google</span>
        </Button>
      </div>
    </div>
  );
};

export default FormSignIn;
