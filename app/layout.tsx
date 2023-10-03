import "../public/assets/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { AppProps } from "next/app";

export default function RootLayout({ children,}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
        <body>{children}</body>
    </html>
  )
}