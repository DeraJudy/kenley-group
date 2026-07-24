"use client";

import Link from "next/link";

import { LiveIndicator } from "@/src/components/shared/LiveIndicator";
import { Container } from "@/src/components/shared/Container";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-black/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="serif text-2xl">
          Kenley
          <span className="text-[var(--cream-muted)]">Group</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="#about">About</Link>

          <Link href="#approach">Our Approach</Link>

          <Link href="#referrals">Referrals</Link>

          <Link href="#contact">Contact</Link>
        </div>

        <Link
          href="#"
          className="mono flex items-center gap-3 border border-[var(--green)] px-5 py-2"
        >
          <LiveIndicator />
          Live Tracker
        </Link>
      </Container>
    </nav>
  );
}
