"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "@/store";
import "../public/styles/style.scss";
import { Provider } from "react-redux";
import Nav from "@/components/NavigationComponent";
import "./globals.scss"
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ToastContainer autoClose={10000} position="top-right" />
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
