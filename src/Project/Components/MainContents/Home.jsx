import "../../Styles/MainContents/Home.css"

import Meet from "../../Assets/Home/Meet.png"
import Pay from "../../Assets/Home/Pay.png"
import Teach from "../../Assets/Home/Teach.png"
import Connect from "../../Assets/Home/Connect.png"

import Education from "../../Assets/Home/Education.jpg"
import Blogs from "../../Assets/Home/Blog.jpg"
import Science from "../../Assets/Home/Science.jpg"
import Style from "../../Assets/Home/Style.jpg"

import Benefit from "../../Assets/Home/BenefitBackground.png"
import HeroTop from "../../Assets/Home/HeroTop.png"

import LeftBackground from "../../Assets/Home/LeftBackground.png"

const Home =()=> {

    const hero = [
                    ['M', 'E', 'E', 'T', ' ', 'A', 'N', 'Y', 'O', 'N', 'E'],
                    ['T', 'E', 'A', 'C', 'H', ' ', 'A', 'N', 'Y', 'O', 'N', 'E'],
                    ['M', 'E', 'E', 'T', ' ', 'A', 'N', 'Y', 'O', 'N', 'E'],
                    ['M', 'E', 'E', 'T', ' ', 'A', 'N', 'Y', 'O', 'N', 'E'],
                 ]

    const benefits = [
        {
            image:Meet,
            class:'Meet',
            icon:'bi bi-person-fill-check',
            title:'MEET ANYONE YOU',
            bottom:'WANT',
            description: 'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem Ipsum has been the industry'
        },

        {
            image:Teach,
            class:'Teach',
            icon:'bi bi-mortarboard-fill',
            title:'TEACH SOMETHING YOU ',
            bottom:'KNOW',
            description: 'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem Ipsum has been the industry'
        },

        {
            image:Connect,
            class:'Connect',
            icon:'bi bi-globe-americas',
            title:'CONNECT WITH EACH ',
            bottom:'OTHERS',
            description: 'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem Ipsum has been the industry'
        },

        {
            image:Pay,
            class:'Pay',
            icon:'bi bi-cash-coin',
            title:'MAKE YOUR PASION',
            bottom:'PAY',
            description: 'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry Lorem Ipsum has been the industry'
        }
    ]

    const categories = [
        {
            image:Education,
            title:'Education'
        },

        {
            image:Science,
            title:'Science & Tech'
        },

        {
            image:Blogs,
            title:'People & Blogs'
        },

        {
            image:Style,
            title:'How to style'
        },

        {
            image:Education,
            title:'Education'
        },

        {
            image:Science,
            title:'Science & Tech'
        },

        {
            image:Blogs,
            title:'People & Blogs'
        },

        {
            image:Style,
            title:'How to style'
        },

        {
            image:Education,
            title:'Education'
        },

        {
            image:Science,
            title:'Science & Tech'
        },

        {
            image:Blogs,
            title:'People & Blogs'
        },

        {
            image:Style,
            title:'How to style'
        },

        {
            image:Education,
            title:'Education'
        },

        {
            image:Science,
            title:'Science & Tech'
        },

        {
            image:Blogs,
            title:'People & Blogs'
        },

        {
            image:Style,
            title:'How to style'
        },

        {
            image:Education,
            title:'Education'
        },

        {
            image:Science,
            title:'Science & Tech'
        },

        {
            image:Blogs,
            title:'People & Blogs'
        },

        {
            image:Style,
            title:'How to style'
        },

        {
            image:Education,
            title:'Education'
        },

        {
            image:Science,
            title:'Science & Tech'
        },

        {
            image:Blogs,
            title:'People & Blogs'
        },

    ]

    return (
        <div className="Home">
            <div className="Align-Home row g-0">
                <div className="col-6">
                    <div className="Hero-Left"/>
                </div>

                <div className="col-6">
                    <div className="Hero-Right"/>
                </div>

                <div className="Hero-Top">
                    <img src={HeroTop} alt="Hero-Top" />
                </div>

                <div className="Hero-Second">
                    <div className="row g-0">
                        <div className="col-6 ps-5">
                            <img src={LeftBackground} alt="left-Background" />
                        </div>
                    </div>
                    
                </div>

                <div className="Hero-Contents">
                    <div className="col-10 row g-0">
                        <div className="col-6">
                            <div className="Hero-Left-Contents pt-5">
                                <h1 className="text-start mt-3 me-4">THIS IS THE PLATFORM TO <span>LEARN</span> WHAT YOU DON'T KNOW & <span>TEACH</span> OTHERS WHAT YOU KNOW</h1>

                                <form className="py-1 pe-1 mt-5">
                                    <input type="text" placeholder="Type Name, Category or Anything"/>
                                    <button className="Search-Submit"><i class="bi bi-search"></i></button>
                                </form>

                                <div className="Soial-Buttons pt-5">
                                    <a href="" className="Facebook Social-Icon"><i class="bi bi-facebook"></i></a>
                                    <a href="" className="Twitter Social-Icon"><i class="bi bi-twitter"></i></a>
                                    <a href="" className="LinkedIn Social-Icon"><i class="bi bi-linkedin"></i></a>
                                    <a href="" className="Email Social-Icon"><i class="bi bi-envelope-at-fill"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="Hero-Right-Contents">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Our-Benefits pb-5">
                <div className="col-10">
                    <div className="row g-3 Align-Benefits">
                        {benefits.map((benefit) => (
                            <div className="col-3">
                                <div className="Single-Benefit px-3 py-4">
                                    <div className={`Benefit-Icon ${benefit.class}`}>
                                        <i class={benefit.icon}></i>
                                    </div>

                                    <div className="mt-3 mb-2">
                                        <h6 className="Benefit-Title">{benefit.title}</h6>
                                        <h6 className="Benefit-Title">{benefit.bottom}</h6>
                                    </div>

                                    <p>{benefit.description}</p>
                                    <h6 className="Learn-More">LEARN MORE <i class="bi bi-box-arrow-in-right"></i></h6>

                                    <img src={Benefit} alt="Background" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="Our-Categories py-5">
                <div className="col-10">
                    <h2 className="text-center"><strong>EXPLORE OUR <span>CATEGORIES</span></strong></h2>

                    <div className="row g-3 mt-3">
                    {categories.map((category) => (
                        <div className="col-3">
                            <div className="position-relative">
                                <div className="Single-Category">
                                    <img src={category.image} alt="category" />
                                </div>

                                <div className="Category-Title py-3">
                                    <h6 className="text-center">{category.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home