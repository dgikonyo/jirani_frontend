import "../public/assets/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <SessionProvider session={children.session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  )
}