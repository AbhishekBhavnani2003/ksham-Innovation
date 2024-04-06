import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/intro' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Testimonials', href: '/testimonial' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
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
                    className="h-8 w-auto"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAABXCAYAAACgAx9ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACCWSURBVHgB7d0HmB1VFQfwGxISugEsSNGAvVLslVDsBbB3gr0L9h7y2SugqFgJ9gYEKwhSVFSaCSC9LQgC0hJ6Chnv7+adZfKyu+zbnd1sPuZ83+xrU+7c+7/n/E+5s5PSGEpVVdPzy6y87Za37fI2PbVyd5KFeTs+b0d4nTRpUl8aI5mUxkAygGfml9l5m5laaeVOmZe3QzKg56WGpVEgZwDPSisAPCO10srg0pe3ORnQc1ND0giQOxr44NQCuJXepC81BOhRATkDeEZaAeCZqZVWRi5z0wpA96URylpphJJBvHd+mZ9aELcyepmVt/kdajoi6VkjdyIRePDeqZVWmpf9s2beJ/UoPQG5QyUOTytCaa20MlayIG979EI1hg3kDoiPS61D18r4SF/edhoumIcF5BbErawm6UvDBPNdArkFcSurWfrSMMA8HCCLTLScuJXVKTgzMC8cbIcpQx2dQbxfWoNAvGTJknTjjTemRYsWpltvuyXdvnhxWrb0jjRl8pQ0derUtO6666Z73OMeaeONN05rr712yh2TWlkjBAZFygaNZgw6kp2Y3sFpAssdy5en66+/NvVd0pf++9//pv/973/poosuShddcmG6+uor08JFN6bbbr09rTN13bThhhumTTfdNG2zzTbp0Y9+dHroQx+aHvzgB6dNNtkkTZ48ObWyRsg+WfnsP9APAwK5w4tRiglZrXbzLTens84+K82fPz+dc87ZacHpp6cLz7sgg/qGtHjx0rTWpLVSlbVtvo+8d5XWymmfKoN+xeeU1l9//fTwhz88PfnJT07Pfvaz05Oe9KS0wQYb5P1GnB9qZXwEtdh+IL48GJDn5pc90wSSanmVFi5cmE488cR01NFHplPnn5rOO//8dPONt2SqsEnacvMt0n032yxtsP6Gee+1E9a07I47MugXZe18ebri8ssy0K9fca4MaLSCJn7Ywx6WXvrSl6bXvOY16X73u19LNya+KAfdqfvLVUZtolGK5VmTLlq0KB1/7HFp3uHz0plnnpGuuf6atOWMLdMOj3l82u7RO6T7bbVF2jhz3w03WD9z4Wl0cL6zyWn5HcvTkqVL0s033ZhuuOG6dPHFF6dTTjmlTIbLL7883ZGBDrj3vOc908tf/vL0nve8pwXzmiEcv+PrXwwE5EvSBAi10Zq33XZbOj3ThkMOOSSddvIpaVK1PD35qU9LO++6c9r6gduke256rzR9+iZpnWlTO+CrameYdOenyvmWl/Nde+216cILL0y//vWv029/+9t01VVXlWvd+973Tm9605vSu971rnSve90rtTKhpS+P99b1L1YC8kTRxjQlgP3mN78pgPP5ec95bnrGLrukLbbaKk3feHqasnYOuGQuPBLduXTp0uIYAvL++++fLrjggjIRtt566/SRj3wkvfa1ry1RjVYmtOxVL//sBvJq18a33357duDOST/+8Y/TWWedlXbaaaf0ghe8oJj89dZdr+OQZRU7aUl+WZZfAc7WG6RpYZTlpz/9afr0pz9dgD1lypT0nOc8J33pS19KD3zgA1MrE1pW0sr9ceQ8sLun1Qzim266Kf3jH/9Iv/zlL4sj9tGPfjRtv/32JcpAY/bTh+qWtGzJpalaelX+bnqaPG1GpsSbpF7A7FxiyibJP//5z/SrX/2qxKG9P/nkk4t2bsNyE1pmWNARXLkeb5qVVqNIZBx55JEFxOK7H/rQh0p4LMJidzpgS9PyJX3pluuPTIuuPTQtuuawtPjGkzK4b0u9inPe5z73SS9+8YtLjNnn6667rjiEEeFoZULL7HhTgNyJG++WVpPQxH/+85/Taaedlp73vOcVpys04ioRhOr2tPjWy9LS285Ja1XnZ3ZxXv58bg7P3ZhWdvaGJ7jwox71qPSEJzyhTBhRkgULFpSoRisTXmZ26uP7NfLMtJqEJv79739fHK6XvOQlBchSyHdSiW7JbOiOqWnq8nXT2sumpmle0zoZwyOjAa4hSjFz5sySxvZZdlB0IxIorUxomeVPcOTd02qQm2++OR199NE5xntD2n333dMDHvCAu+alk6alqettkyYv2TYtX7xR/mKjtPYGj8oBDImQkcV/11tvvXT/+9+/aGTgNbm0LRInrUxowST2DyDvmMZZOFYnnXRSCYVxuLbYYothgmZymrzO5mnSprtmLXxz3tZOa027T7Yt09JIBYAVFJlEqMWyZcvKaytrhJSitilZ64z7E4CA91//+ldJUAivMe09ab4M2rWmbpUVcAZblbVo1sSTRrEgnOZd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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({
                          isActive,
                        }) => {
                          return (
                            'px-3 py-2 rounded-md text-sm font-medium no-underline ' +
                            (!isActive
                              ? ' text-gray-300 hover:bg-gray-700 hover:text-white'
                              : 'bg-gray-900 text-white')
                          );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://i.pinimg.com/564x/d0/7b/a6/d07ba6dcf05fa86c0a61855bc722cb7a.jpg"
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
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
