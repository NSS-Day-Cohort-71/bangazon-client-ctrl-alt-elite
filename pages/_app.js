import '../global.css'

export default function Bangazon({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  // console.log(`This is the current Component:`, Component.name)
  return getLayout(
    
      <Component {...pageProps} />
  )
}
