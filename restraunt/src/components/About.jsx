import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            We believe every dish has a story to tell, and that story starts with passion. Whether it's sourcing the freshest ingredients or crafting recipes that celebrate culinary creativity, we pour our heart and soul into every bite. From local classics to globally-inspired delicacies, we take the art of food seriously—so you can enjoy it effortlessly.
            </p>                                                  


            <p className="mid">

            Our commitment isn't just to the food itself, but to the experience it creates: a moment to savor, a memory to share, and a connection to treasure. So, while we love a good laugh and believe in living life boldly, when it comes to food, we mean business—delicious, delightful, and downright serious business.

            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
