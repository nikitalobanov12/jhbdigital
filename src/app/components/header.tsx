"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const navigation = [
  { name: 'Info', href: '/info' },
  { name: 'About', href: '/about' },
  { name: 'Home', href: '/' },

]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <div className="isolate bg-background text-white fixed w-full pb-4 z-10">
        <div className="px-6 pt-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link
                href="/"
                className="-m-1.5 p-1.5 hover:text-primary-500 transition-all"
              >
                <span className="text-lg">JHB Digital</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 hover:text-primary-500 transition-all "
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6  hover:text-primary-500 hover:animate-pulse transition-all "
              >
                Get Started <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-background px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="text-white hover:text-primary-500 transition-all">
                    JHB Digital
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white hover:text-primary-500 transition-all"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-secondary-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-secondary-200 "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white  hover:bg-secondary-200"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    );}