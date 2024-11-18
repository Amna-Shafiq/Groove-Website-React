import React from "react";
import "../pages/styles/MallPage.css";
import video from "../assets/video.mp4"

const MallPage = React.forwardRef((props, ref) => {
    return (
    <section id="mall" className="section" ref={ref}>
      <div className="mall-content">
        <h1>Mall Of: Endless Possibilities</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indacustry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <section id="video-section">
          <video className="custom-video" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </section>
  );
});

export default MallPage;
