import React, { Component } from 'react';
import '../css/main.css'
import Reponsive from '../conf/reponsive'
import Right from '../component/Right';
import Left from '../component/Left';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


class main extends Component {
    render() {
        return (
            <div>
                <Reponsive />
                <div className="wraper">
                    <div className="box" />
                    <div className="box2" />
                    <div className="card">
                        <div className="left" id="left">
                            <div className="avata__img">
                            </div>
                            <div className="contact__wrap pb">
                                <div className="title">
                                    CONTACT
          </div>
                                <div className="contact">
                                    <ul>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    <FontAwesomeIcon icon="phone" />
                                                </div>
                                                <div className="text">
                                                    0362319665
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    <FontAwesomeIcon icon="envelope" />
                                                </div>
                                                <div className="text">
                                                    vinhtransn98@gmail.com
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    <FontAwesomeIcon icon="network-wired" />
                                                </div>
                                                <div className="text">
                                                    www.facebook.com/vinhtransn98/
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                <FontAwesomeIcon icon="map" />
                                                </div>
                                                <div className="text">
                                                    số 09 ấp Bầu Tre 1, xã Tân An Hội, huyện Củ Chi, TP.HCM.
                  </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="skills__wrap pb">
                                <div className="title">
                                    skills
          </div>
                                <div className="skills">
                                    <ul>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon className="fab fa-html5" /> */}
                                                </div>
                                                <div className="text">
                                                    HTML
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon className="fab fa-css3-alt" /> */}
                                                </div>
                                                <div className="text">
                                                    CSS
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon className="fab fa-js" /> */}
                                                </div>
                                                <div className="text">
                                                    JAVASCRIPT
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon className="fab fa-react" /> */}
                                                </div>
                                                <div className="text">
                                                    REACTJS
                  </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hobbies__wrap pb">
                                <div className="title">
                                    hobbies
          </div>
                                <div className="hobbies">
                                    <ul>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon className="fas fa-volleyball-ball" /> */}
                                                </div>
                                                <div className="text">
                                                    sports
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon className="fas fa-book" /> */}
                                                </div>
                                                <div className="text">
                                                    Read book
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon className="fas fa-suitcase-rolling" /> */}
                                                </div>
                                                <div className="text">
                                                    travel
                  </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li__wrap">
                                                <div className="icon">
                                                    {/* <FontAwesomeIcon name="fish" className="fas fa-fish" /> */}
                                                </div>
                                                <div className="text">
                                                    fishing
                  </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right" id="right">
                            <div className="header">
                                <div className="name__role">
                                    <div className="name">
                                       
                                       <div className="avata__img__respon"></div>
                                        <div className="name__content">
                                            Tran Quang Vinh
              </div>
                                    </div>
                                    <div className="role">
                                        Fesher developer
            </div>
                                </div>
                                <div className="about">
                                    With a burning love for computers I have found my passion as a website developer. I think I will bring that passion into a part of my life. I think your business will fulfill my wish. With the spirit of learning and perfectionism, I will complete the
                                    assigned work well.
          </div>
                            </div>
                            <div className="right__inner">
                                <div className="exp">
                                    <div className="title">
                                        Experience
            </div>
                                    <div className="exp__wrap">
                                        <ul>
                                            <li>
                                                <div className="li__wrap">
                                                    <div className="date">2019 - present</div>
                                                    <div className="info">
                                                        <p className="info__title">Student Fontend developer</p>
                                                        <p className="info__com">Learnning in Cybersof</p>
                                                        <p className="info__cont">
                                                            I have done a lot of projects, though not large scale but very good for later work
                      </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="edu">
                                    <div className="title">
                                        Education
            </div>
                                    <div className="edu__wrap">
                                        <ul>
                                            <li>
                                                <div className="li__wrap">
                                                    <div className="date">2019 - present</div>
                                                    <div className="info">
                                                        <p className="info__title">Learning Fontend developer</p>
                                                        <p className="info__com">Course in Cybersof</p>
                                                        <p className="info__cont">
                                                            I am really serious about my passion right now. 40km from home to the center because the center is very prestigious, so I still go to school fully and carry out many practical projects. The center has a very good route, I think.Over the past 6 months
                                                            I have learned a lot at the Center, almost 80% of my skills improved from Cybersof.
                      </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="li__wrap">
                                                    <div className="date">2017 - present</div>
                                                    <div className="info">
                                                        <p className="info__title">Student Website developer</p>
                                                        <p className="info__com">Vocational Bach Khoa Sai Gon</p>
                                                        <p className="info__cont">
                                                            After 2 years, I decided to study at Saigon Polytechnic to pursue my passion as a student in IT, and I have learned and become familiar with many different technologies and tools. Therefore, it has improved the spirit of learning quite a lot
                      </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="li__wrap">
                                                    <div className="date">2013 - 2015</div>
                                                    <div className="info">
                                                        <p className="info__title">Schooling</p>
                                                        <p className="info__com">Thieu Sinh Quan high school</p>
                                                        <p className="info__cont">
                                                            Military schools are taught many skills and a sense of responsibility.
                      </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default main;