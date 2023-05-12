import { FaGoogle } from 'react-icons/fa';
import { Button } from '@/components/atoms';
import { auth, provider } from '@/config/firebase/sdk/sdk';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/config/redux/user/userSlice.reducer';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const FormSignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const userId = result.user.uid;

        dispatch(loginUser({ name, email, profilePic, userId }));
        toast(`Welcome ${name}`, { type: 'success' });
        router.push('/');
      })
      .catch((error) => {
        toast(error, { type: 'error' });
      });
  };

  return (
    <div>
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-semibold text-center text-white">
          Sign In
        </h2>
      </div>

      <div>
        <Button
          variant={'btn-accent text-white w-full space-x-2'}
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle size={20} />
          <span>Sign In With Google</span>
        </Button>
      </div>
    </div>
  );
};

export default FormSignIn;
