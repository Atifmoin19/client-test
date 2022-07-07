import React from 'react';
import atif from '../resourse/Atif.jpg'

const About = () => {
    return (
       <>
            <div className="Signup empform">
                <form method=''>
                    <div className="row">
                        <div className='col-md-4'>
                        <img src={atif} alt="atif" />
                        </div>
                        <div className='col-md-6'>
                        <div className='phead'>
                            <h5>Atif Moin</h5>
                            <h6>Web developer</h6>
                            <p className='profile-r mt-3 mb-5'>
                                RANKING : <span> 1/10 </span> 
                            </p>


                            <ul className="nav nav-tabs" role="tablists">
                                <li className="nav-item"><a className="nav-link active" id='home-tab' data-toggle="tab" href="#home" role="tab">About</a></li>
                                <li className="nav-item"><a className="nav-link" id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a></li>
                               
                                
                            </ul>
                        </div>
                        </div>

                        <div className='col-md-2'>
                            <input type="submit" className='profile-butn btn btn-primary' name='btnaddmore' value="edit profile" />
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-work'>
                                <p>WORK LINK</p>
                                <a href="https://www.instagram.com/_.a_ti_f._/">Instagram</a>
                                <a href="https://github.com/Atifmoin19">Github</a>


                            </div>
                        </div>
                    </div>
                </form>
            </div>
       </>
    );
}

export default About;
