import { Route, Routes } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { Layout } from "./components/Layout"
import { Careers } from "./pages/Careers"
import { Home } from "./pages/Home"
import { ProductDetail } from "./pages/ProductDetail"
import { Products } from "./pages/Products"
import { Story } from "./pages/Story"

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="products" element={<Products />} />
          <Route path="careers" element={<Careers />} />
          <Route path="products/:slug" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}
