import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import avatar from '/assets/avatar.jpg'
import me from '/src/assets/me.jpg'
import { useEffect, useRef, useState } from 'react'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Bienvenida', href: '#WelcomePage', current: false },
  { name: 'Formación', href: '#FormacionPage', current: false },
  { name: 'Experiencia', href: '#ExperienciaPage', current: false },
  { name: 'Habilidades Técnicas', href: '#SkillsPage', current: false },
  { name: 'Portafolio', href: '#PortafolioPage', current: false },
  { name: 'Contacto', href: '#ContactoPage', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current

      // Evitamos parpadeo con movimientos muy pequeños
      if (Math.abs(delta) > 5) {
        if (currentY > 80 && delta > 0) {
          // bajando
          setHidden(true)
        } else {
          // subiendo
          setHidden(false)
        }
      }

      setScrolled(currentY > 10)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = classNames(
    'fixed top-0 left-0 right-0 z-50',
    'backdrop-blur-xl border-b border-white/15',
    'transition-transform duration-300 ease-out',
    'transition-colors shadow-lg',
    scrolled
      ? 'bg-slate-900/80 shadow-xl'
      : 'bg-slate-900/40 shadow-md',
    hidden ? '-translate-y-full' : 'translate-y-0'
  )

  return (
    <Disclosure as="nav" className={navClasses}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Botón móvil */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                  <span className="absolute -inset-0.5 rounded-xl" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>

              {/* Logo + navegación desktop */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center gap-2">
                  <img
                    alt="Yo"
                    src={me}
                    className="h-9 w-9 rounded-2xl object-cover shadow-md ring-2 ring-white/30"
                  />
                  <span className="hidden text-sm font-semibold tracking-tight text-slate-100 sm:inline">
                    Javier CV
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2 rounded-2xl bg-white/5 px-2 py-1 backdrop-blur-sm">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          'rounded-xl px-3 py-1.5 text-sm font-medium transition-all',
                          'border border-transparent',
                          item.current
                            ? 'bg-white/15 text-slate-50 shadow-sm border-white/30'
                            : 'text-slate-200/80 hover:bg-white/10 hover:text-white hover:border-white/20'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notificaciones + avatar */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-white/5 p-1 text-slate-200 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white/10 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt="avatar"
                        src={avatar}
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-white/40"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-2xl bg-slate-900/90 py-1 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transition data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-100 data-[focus]:bg-white/10 data-[focus]:outline-none"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-100 data-[focus]:bg-white/10 data-[focus]:outline-none"
                      >
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-300 data-[focus]:bg-red-500/20 data-[focus]:outline-none"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          {/* Menú móvil */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-slate-900/90 backdrop-blur-xl border-b border-white/10">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    'block rounded-xl px-3 py-2 text-base font-medium transition-all',
                    item.current
                      ? 'bg-white/15 text-slate-50'
                      : 'text-slate-200/85 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
