import Title from '@/components/atoms/Title/Title.atom';
import Link from 'next/link';

const Header = ({ isLogin, user, logout, dispatch }) => {
  return (
    <div className="navbar px-14 py-6">
      <div className="flex-1 space-x-20">
        <Link href="/" className="normal-case">
          <Title />
        </Link>

        <a href="#" className="text-black font-semibold">
          About
        </a>
      </div>

      {isLogin !== true ? (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link href="/sign-in" className="btn btn-primary">
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
                <img src={user.profilePic} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => dispatch(logout({}))}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
