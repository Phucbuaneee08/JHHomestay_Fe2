import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {UserCircleIcon} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'

const user = {
    name: 'User Name',
}
const userNavigation = [
    { name: 'Thông tin cá nhân', href: '#' },
    { name: 'Đăng xuất', href: '#' },
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  
const Header = (props) => {
    return(
        <div className="border-solid shadow flex items-center justify-end">
            <div className="mx-4 h-auto flex-shrink-0 visible min-h-full  border-solid rounded-full border-green">  
                <Disclosure as="nav" className="bg-white">
                {({ open }) => (    
                    <div className="max-w-7xl mx-auto px-0 lg:px-2 flex items-center justify-between h-16">
                        <div className="md:block ml-4 flex items-center md:ml-6 ">
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs bg-white flex items-center rounded-full hover:bg-gray-100">
                                        <UserCircleIcon className="pl-2 w-10 h-10 stroke-current test-define"/>
                                        <style>{`
                                            .test-define > path{
                                                stroke-width: 1;
                                            }
                                        `}</style>   
                                        <p className="pl-2 w-auto text-black font-sans ">{user.name}</p>
                                        <ChevronDownIcon className="h-5 w-5 pt-1 pr-1"/>
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
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                        <a
                                            href={item.href}
                                            className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                        )}
                                    </Menu.Item>
                                    ))}
                                </Menu.Items>

                                </Transition>
                            </Menu>
                        </div>
                    </div>
                )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Header