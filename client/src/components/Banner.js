import banner from '../images/banner.jpg'

const Banner = () => {
  return (
    <>
      <div id='bannerbox'>
        <img 
          id='banner'
          src={banner}
          alt='wolfpupdevs banner'
        />
      </div>
    </>
  )
}

export default Banner