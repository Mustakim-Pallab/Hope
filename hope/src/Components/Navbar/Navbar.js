/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { navigation } from "./NavElements";
import UseAuth from "../Hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [Current, setCurrent] = useState(window.location.pathname);
  const { User } = UseAuth();
  console.log(User);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Disclosure
      as="nav"
      className="bg-white rounded-l-lg border  h-26 sticky z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 my-3.5">
            <div className="relative flex h-16 items-center justify-end ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-green hover:bg-green-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src={logo}
                    alt="Hope"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={logo}
                    alt="Hope"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:mx-auto sm:my-10 sm:justify-end sm:block">
                  <div className="flex space-x-0.5 md:space-x-4 justify-end">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href == Current
                            ? "bg-green-100 text-white rounded-md"
                            : "text-green hover:text-green-100",
                          "px-3 py-1.5  text-md  rounded-md"
                        )}
                        onClick={() => setCurrent(window.location.pathname)}
                        // aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {
                  User.email?<Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-100">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={`${User.photoURL}`}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-green"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 w-full text-left"
                                : "w-full text-left",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={handleSignOut}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>:<Link
                        
                        to='/login'
                        className={classNames(
                           "bg-green-50 text-green rounded-full hover:text-white px-3 py-1.5 mx-3 hover:bg-green-100 text-sm"
                        )}
                        onClick={() => setCurrent(window.location.pathname)}
                        // aria-current={item.current ? 'page' : undefined}
                      >
                        Login
                      </Link>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href == Current
                      ? "bg-green-100 text-white"
                      : "text-green  hover:text-green-100",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  onClick={() => setCurrent(window.location.pathname)}
                  //   aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
