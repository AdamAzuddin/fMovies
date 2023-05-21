"use client";
import { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { signIn, useSession, getProviders } from "next-auth/react";
import ListDropdownMenu from "@components/ListDropdownMenu";
import Search from "./Search";

const products = [
  {
    name: "Watch Later",
    href: "/watch-later",
  },
  {
    name: "Favourites",
    href: "/favourites",
  },
  {
    name: "Recently Viewed",
    href: "/recently-viewed",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavHeader() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <header className="w-full">
      <nav
        className="mx-auto flex items-center justify-between py-2 "
        aria-label="Global"
      >
        <div className=" justify-start logo ml-4">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </div>

        <nav className=" space-x-4 justify-end ml-5 nav-links">
          <a href="/" className="page-link">
            Home
          </a>
          <a href="/movies" className="page-link">
            Movies
          </a>
          <a href="/series" className="page-link">
            Series
          </a>
          <ListDropdownMenu />
        </nav>

        {/*Mobile*/}
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="header-icon ml-3 text-bold"
              aria-hidden="true"
              color="white"
            />
          </button>
        </div>
        <div className="flex  space-x-4 justify-end ml-auto mr-4">
          <div className="flex space-x-4">
            <Search/>
            {session?.user ? (
              <>
                <button className="full items-center justify-center">
                  <FontAwesomeIcon icon={faBell}  className="header-icon" />
                </button>
                <a href="/my-profile">
                  <div className="rounded-full w-9 h-9 overflow-hidden">
                    <img
                      src={session?.user.image}
                      alt="Profile Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full mr-4 text-[1rem] md:text-[1.2rem]"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    >
                      Sign in
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
        <Popover.Group className="hidden md:flex md:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 ">
            Home
          </a>
          <a href="/movies" className="text-sm font-semibold leading-6">
            Movies
          </a>
          <a href="/series" className="text-sm font-semibold leading-6">
            Series
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 ">
              List
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-primary-background text-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto text-white">
                        <a href={item.href} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 ">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-white">
                <a
                  href="/"
                  className="text-white hover:text-black hover:no-underline -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/movies"
                  className="text-white hover:text-black hover:no-underline -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading- hover:bg-gray-50"
                >
                  Movies
                </a>
                <a
                  href="/series"
                  className="text-white hover:text-black hover:no-underline -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Series
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black">
                        List
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="text-white hover:text-black hover:no-underline block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
