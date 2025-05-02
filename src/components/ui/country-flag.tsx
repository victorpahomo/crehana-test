"use client";
import Image from "next/image";
import { useState } from "react";

import { env } from "@/config/env";

interface CountryFlagProps {
  countryCode: string;
  width?: number;
  height?: number;
}

const flagPlaceholderPath = "/svg/flag-placeholder.svg";
const FLAG_CDN_URL = env.countryFlagCdnUrl;

/**
 * Component to display a country flag with fallback
 * @param countryCode - The country code to display
 * @param width - The width of the flag
 * @param height - The height of the flag
 * @returns The country flag component
 */
export default function CountryFlag({
  countryCode,
  width = 80,
  height = 80,
}: CountryFlagProps) {
  const [error, setError] = useState(false);
  const flagUrl =
    FLAG_CDN_URL && !error
      ? `${FLAG_CDN_URL}/w160/${countryCode.toLowerCase()}.webp`
      : flagPlaceholderPath;

  const altText =
    FLAG_CDN_URL && !error
      ? `Bandera de ${countryCode}`
      : "Bandera de placeholder";

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="relative"
    >
      <Image
        src={flagUrl}
        alt={altText}
        fill
        sizes="100%"
        className="object-contain"
        placeholder="blur"
        blurDataURL={flagPlaceholderPath}
        onError={() => setError(true)}
      />
    </div>
  );
}
