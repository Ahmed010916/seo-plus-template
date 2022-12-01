import LastNav from '../Components/LastNav';
import MainNav from '../Components/MainNav';
import FloatingButtons from './../Components/FloatingButtons';
import HeaderNav from './../Components/HeaderNav';
import Technology from './../Components/Technology';
function Home() {
  return (
    <div className='bg-accent'>
      {/*Navbar*/}
      <HeaderNav />
      <MainNav />
      <LastNav />
      {/* First Section */}
      <Technology />
      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  )
}

export default Home