import React from 'react'
// file này chỉ thay đổi ở phần trên này 
const subtitle ='Save the Day';
const title=(
    <h2 className='title'>Join on Day Long Free Platform for <b>Advance <span>Mastering</span></b> on Sales</h2>
)
const desc='Limited Time Offer! Hurry Up!!!'
// chỗ này t thấy ko cần phải thay đổi
const RegistForMoreInfo = () => {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center '>
                <div className="col">
                    <div className='section-header'>
                    <span className='subtitle'>{subtitle}</span>
                    {title}
                    <p>{desc}</p>
                    </div>
                </div>

                <div className="col">
                    <div className='section-wrapper'>
                        <h4>Register Now</h4>
                        <form className='register-form'>
                            <input type="text" name='name' placeholder="Username" className='reg-input' />
                            <input type="text" name='Email' placeholder="Email" className='reg-input' />
                            <input type="text" name='Number' placeholder="Phone Number" className='reg-input' />
                            <button type='submit' className='lab-btn'>
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RegistForMoreInfo