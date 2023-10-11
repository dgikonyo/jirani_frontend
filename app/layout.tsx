import "../public/assets/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "./redux/provider";

export const metadata = {
  title: "Jirani Crowdfund",
  description: "Supporting creators to launch projects",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}