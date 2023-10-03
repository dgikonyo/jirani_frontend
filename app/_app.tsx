import "../public/assets/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { AppProps } from "next/app";

// export default function RootLayout({ children, }: { children: React.ReactNode }, { session }: { session: SessionProviderProps }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </head>
//       <SessionProvider session={session}>
//         <body>{children}</body>
//       </SessionProvider>
//     </html>
//   )
// }

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}