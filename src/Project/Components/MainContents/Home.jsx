import "../../Styles/MainContents/Home.css"

import Meet from "../../Assets/Home/Meet.png"
import Pay from "../../Assets/Home/Pay.png"
import Teach from "../../Assets/Home/Teach.png"
import Connect from "../../Assets/Home/Connect.png"

import Education from "../../Assets/Home/Education.jpg"
import Blogs from "../../Assets/Home/Blog.jpg"
import Science from "../../Assets/Home/Science.jpg"
import Style from "../../Assets/Home/Style.jpg"

const Home =()=> {

    const benefits = [
        {
            image:Meet,
            description:'Meet anyone you want'
        },

        {
            image:Teach,
            description:'Teach something you know'
        },

        {
            image:Connect,
            description:'Connect with each other'
        },

        {
            image:Pay,
            description:'Make your passion pay'
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
        }
    ]

    return (
        <div className="Home">
            <div className="Align-Home">
                <div className="Align-Hero">
                    <div className="col-10 py-5">
                        <div className="row g-0 py-5">
                            <div className="col-6 pe-2">
                                <div className="Brand-Title py-5 px-4">
                                    <h4 className="text-center">OpenWorldX</h4>
                                    <h1 className="text-center">LEARN & <span>GUIDE</span> FROM <br></br>ANYWHARE</h1>
                                    <h6 className="text-center mx-4">This is the platform to learn what you don't know and teach others what you know.</h6>

                                    <div className="Hero-Search pt-4 px-5">
                                        <form>
                                            <input type="text" />
                                            <button className="Search-Submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 ps-2">
                                <div className="Home-Slider py-5">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Our-Benefits pb-5">
                <div className="col-10">
                    <div className="row g-3">
                        {benefits.map((benefit) => (
                            <div className="col-3">
                                <div className="Single-Benefit py-4">
                                    <img className="my-4" src={benefit.image} alt="benefit" />
                                    <h6 className="text-center">{benefit.description}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="Our-Categories py-5">
                <div className="col-10">
                    <h2 className="text-center"><strong>SEE OUR <span>CATEGORIES</span></strong></h2>

                    <div className="row g-3 mt-3">
                    {categories.map((category) => (
                        <div className="col-3 ">
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