import Link from 'next/link';
import Image from 'next/image';
import {
  useIsLoginSelector,
  useUserSelector,
} from '@/config/redux/user/userSelector.reducer';
import { logoutUser } from '@/config/redux/user/userSlice.reducer';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '@/config/firebase/sdk/sdk';
import { signOut } from 'firebase/auth';
import { Button, Title } from '@/components/atoms';
import { HeroImage } from '@/public/assets';

const Header = () => {
  const isLogin = useIsLoginSelector();
  const user = useUserSelector();
  const logout = logoutUser;
  const dispatch = useDispatch();
  const router = useRouter();

  const [src, setSrc] = useState(true);

  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        dispatch(logout({}));
        router.push('/');
        toast('Succes logout', { type: 'success' });
      })
      .catch((e) => {
        toast(e, { type: 'error' });
      });
  }, [dispatch, logout, router]);

  return (
    <div className="navbar px-4 py-4 md:px-12 lg:px-28">
      <div className="flex-1 space-x-20">
        <Link href="/" className="normal-case">
          <Title />
        </Link>
      </div>

      {isLogin !== true ? (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link href="/sign-in" className="btn btn-primary text-xs">
              Sign In
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-x-4">
          <div>
            <span className="font-semibold">{user.name}</span>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={src ? user.profilePic : HeroImage}
                  width={50}
                  height={50}
                  alt="profile"
                  className="object-contain"
                  placeholder="blur"
                  blurDataURL={
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0sraOBgAClAEVfrGhwQAAAABJRU5ErkJggg=='
                  }
                  onError={() => setSrc(false)}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Button
                  onClick={() => handleLogout()}
                  text={'logout'}
                  variant={'btn-error text-white hover:bg-red-500'}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
