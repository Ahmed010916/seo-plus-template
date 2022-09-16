import MainNav from '../Components/MainNav';
import FloatingButtons from './../Components/FloatingButtons';
import HeaderNav from './../Components/HeaderNav';
function Home() {
  return (
    <>
      {/* Header */}
      <HeaderNav />
      <MainNav />
      {/* Floating Buttons */}
      <FloatingButtons />
    </>
  )
}

export default Home