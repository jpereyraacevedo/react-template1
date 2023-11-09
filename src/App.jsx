import { CommentSection } from './components/CommentSection/CommentSection'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Products } from './components/Products/Products'
import { Section } from './components/Section/Section'
import { StartSection } from './components/StartSection/StartSection'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <StartSection />
      <Section />
      <Products />
      <CommentSection />
      <Footer />
    </>
  )
}

export default App
