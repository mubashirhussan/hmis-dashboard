"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { isNavActive, navItems } from "@/features/shared/config/nav-items";
import {
  NavChevronDownIcon,
  NavCloseIcon,
  NavMenuIcon,
} from "@/features/shared/components/nav-icons";
import {
  Container,
  ContainerFluid,
} from "@/features/shared/components/container";
import { UserAvatar } from "@/features/shared/components/user-avatar";

const NOTIFICATION_COUNT = 12;

const navLinkBase =
  "group relative flex shrink-0 items-center gap-2 px-2 py-1 transition-colors xl:px-3";
const navLabelColor = (active: boolean) =>
  active ? "text-[#005696]" : "text-[#757575] group-hover:text-[#005696]";

const navLabelClass = (active: boolean, extra = "") =>
  [
    "nav-label font-[family-name:var(--font-poppins-family)]",
    active ? "nav-label--active" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");

export function Navbar() {
  const pathname = usePathname();
  const menuId = useId();
  const userMenuId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setUserOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <header className="container-fluid sticky top-0 z-50 bg-white ">
      <Container className="app-navbar flex items-stretch gap-3 sm:gap-4">
        <Link href="/" className="navbar-logo-link" aria-label="AKHF home">
          <Image
            src="/Akhf_logo.png"
            alt="Al-Khidmat Health Foundation"
            width={80}
            height={60}
            className="navbar-logo"
            priority
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden min-w-0 flex-1 items-stretch justify-center gap-1 lg:flex lg:gap-2 xl:gap-3"
        >
          {navItems.map((item) => {
            const active = isNavActive(pathname, item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={[navLinkBase, navLabelColor(active), "self-stretch"].join(
                  " ",
                )}
              >
                <Icon className="h-6 w-6 shrink-0" />
                <span className={navLabelClass(active, "whitespace-nowrap")}>
                  {item.label}
                </span>
                <span
                  className={[
                    "absolute right-0 left-[8px] bottom-[13px] h-[3px] rounded-full bg-[#005696] transition-opacity",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                  ].join(" ")}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <nav
          aria-label="Main"
          className="hidden min-w-0 flex-1 overflow-x-auto md:flex lg:hidden"
        >
          <div className="flex items-stretch gap-1 px-1">
            {navItems.map((item) => {
              const active = isNavActive(pathname, item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={[
                    navLinkBase,
                    navLabelColor(active),
                    "self-stretch border-b-[3px]",
                    active
                      ? "border-[#005696]"
                      : "border-transparent hover:border-[#005696]/40",
                  ].join(" ")}
                >
                  <Icon className="h-6 w-6 shrink-0" />
                  <span className={navLabelClass(active, "whitespace-nowrap")}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="navbar-actions ml-auto self-center">
          <button
            type="button"
            className="navbar-notification-btn navbar-icon-circle"
            aria-label={`Notifications, ${NOTIFICATION_COUNT} unread`}
          >
            <Image
              src="/notification_icon.svg"
              alt=""
              width={20}
              height={23}
              className="h-5 w-5 object-contain"
              aria-hidden
            />
            <span className="navbar-notification-badge">{NOTIFICATION_COUNT}</span>
          </button>

          <div ref={userRef} className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setUserOpen((open) => !open)}
              className="flex items-center gap-2 rounded-lg py-1 pr-1 pl-1 transition hover:bg-zinc-50"
              aria-expanded={userOpen}
              aria-haspopup="menu"
              aria-controls={userMenuId}
            >
              <UserAvatar name="Ammar" className="navbar-icon-circle" />
              <div className="hidden text-left md:block">
                <span className="navbar-user-name">Ammar</span>
                <span className="navbar-user-role mt-1">Admin</span>
              </div>
              <NavChevronDownIcon
                className={[
                  "hidden h-4 w-4 text-[#757575] transition md:block",
                  userOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>

            {userOpen ? (
              <div
                id={userMenuId}
                role="menu"
                className="absolute right-0 z-50 mt-2 w-44 rounded-lg border border-zinc-200 bg-white py-1 shadow-lg"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50"
                >
                  Profile
                </button>
                <button
                  type="button"
                  role="menuitem"
                  className="w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50"
                >
                  Settings
                </button>
                <hr className="my-1 border-zinc-100" />
                <button
                  type="button"
                  role="menuitem"
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                >
                  Sign out
                </button>
              </div>
            ) : null}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#005696] hover:bg-zinc-100 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <NavCloseIcon className="h-6 w-6" />
            ) : (
              <NavMenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id={menuId}
            aria-label="Main mobile"
            className="fixed inset-x-0 top-[var(--navbar-height)] z-50 max-h-[calc(100dvh-var(--navbar-height))] overflow-y-auto border-b border-zinc-200 bg-white px-4 py-3 shadow-lg md:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => {
                const active = isNavActive(pathname, item.href);
                const Icon = item.icon;

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={[
                        "flex items-center gap-3 rounded-lg px-3 py-2",
                        active
                          ? "bg-[#005696]/10 text-[#005696]"
                          : "text-[#757575] hover:bg-zinc-50 hover:text-[#005696]",
                      ].join(" ")}
                    >
                      <Icon className="h-6 w-6 shrink-0" />
                      <span className={navLabelClass(active, "text-left")}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-4 sm:hidden">
              <UserAvatar name="Ammar" />
              <div>
                <p className="navbar-user-name">Ammar</p>
                <p className="navbar-user-role">Admin</p>
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
