const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='image'
      />
      <h1 className='heading1'>Kiran V</h1>
      <p className='para'>
        Vishnu institute of Computer Education and Technology,Bhimavaram{' '}
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
