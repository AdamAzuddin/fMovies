import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "@styles/globals.css";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ListDropdownMenu() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
    >
      <div>
        <Menu.Button className="page-link inline-flex w-full justify-center gap-x-1.5 rounded-mdpx-3 py-2 text-xl">
          List
          <ChevronDownIcon className="-mr-1 h-7 w-7" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({}) => (
                <a
                  href="/watch-later"
                  className={classNames(
                    "block px-4 py-2 text-sm page-link"
                  )}
                >
                  Watch Later
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({}) => (
                <a
                  href="/favourites"
                  className={classNames(
                    "block px-4 py-2 text-sm page-link"
                  )}
                >
                  Favourites
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({}) => (
                <a
                  href="/watched"
                  className={classNames(
                    "block px-4 py-2 text-sm page-link"
                  )}
                >
                  Watched
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
