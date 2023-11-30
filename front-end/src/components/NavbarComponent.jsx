import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarComponent() {
  return (
    <Disclosure as="nav" className="bg-red-600 h-20">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/">
              <img className="h-8 w-auto" src="./logo.png" alt="DemyU" />
            </Link>
          </div>

          <div className="flex items-center ml-auto">
            <Menu as="div" className="ml-4">
              <Menu.Button className="inline-flex w-25 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Kelas
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="relative right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-2">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/kelasGratis"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Kelas Gratis
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/kelasPremium"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Kelas Premium
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex items-center">
            <Link to="/user-profile">
              <img
                className="h-8 w-auto m-3 cursor-pointer"
                src="./user.png"
                alt="User"
              />
            </Link>
            <Link to="/notifications">
              <img
                className="h-7 w-auto m-3 cursor-pointer"
                src="./bell.png"
                alt="Bell"
              />
            </Link>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
