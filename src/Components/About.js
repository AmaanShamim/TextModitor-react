import React from "react";

export default function About(props) {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
  };

  return (
    <div
      className="container"
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>About</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={mystyle}
            >
              <strong>Welcome to Textmoditor!</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textmoditor is a powerful and user-friendly text editing app built
              with React. Our app is designed to make editing text easy and
              intuitive, so you can focus on your writing without any
              distractions. Whether you're a professional writer or just need a
              reliable tool for everyday use,
              <br />
              <br />
              It has everything you need to get the job done. One of the key
              features of Textmoditor is its real-time collaboration
              capabilities. With our app, you can collaborate with others on the
              same document in real-time, making it easy to work together on a
              project, whether you're in the same room or across the world. Our
              collaboration features are designed to be easy to use, so you can
              get started right away.
              <br />
              <br />
              At Textmoditor, we are committed to providing our users with the
              best possible experience. Our app is constantly being updated with
              new features and improvements to make sure it stays at the cutting
              edge of text editing technology. If you have any questions or
              feedback, please don't hesitate to contact us. We are always here
              to help and we value your input.
              <br />
              <br />
              Thank you for choosing Textmoditor! We hope you enjoy using our
              app and we look forward to helping you create amazing text
              documents.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Textmoditor is a powerful and user-friendly text editing app that
              is completely free to use. We believe that everyone should have
              access to high-quality text editing tools, regardless of their
              budget or technical expertise.
              <br />
              <br />
              With Textmoditor, you don't have to worry about expensive
              licensing fees or subscription costs. Our app is completely free
              to use, and there are no hidden costs or limitations on the
              features you can access. Whether you're a student, a professional
              writer, or just someone who needs a reliable text editor for
              everyday use, Textmoditor has everything you need to get the job
              done, all at no cost to you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
              style={mystyle}
            >
              <strong>
                Meet Amaan Shamim Khan, the Developer Behind Textmoditor
              </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse show"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              Meet Amaan Shamim Khan, the developer behind Textmoditor. Amaan is
              a skilled full stack developer with years of experience in
              developing high-quality applications.
              <br />
              <br />
              Amaan's passion for technology and his dedication to delivering
              top-notch web solutions led him to create Textmoditor. As a writer
              himself, Amaan understands the importance of having a reliable
              text editor that is easy to use and packed with useful features.
              <br />
              <br />
              With Textmoditor, Amaan has brought his expertise in web
              development to create a powerful and user-friendly text editing
              app that is accessible to everyone. From the app's sleek design to
              its advanced collaboration features, every aspect of Textmoditor
              has been carefully crafted to provide the best possible experience
              for users.
              <br />
              <br />
              Amaan is committed to ensuring that Textmoditor remains at the
              forefront of text editing technology, and he is constantly working
              on new features and improvements to make the app even better. He
              is also passionate about providing excellent customer service, and
              he is always available to answer questions and address any issues
              that users may have.
              <br />
              <br />
              So if you're looking for a reliable and user-friendly text editor,
              look no further than Textmoditor, the app developed by{" "}
              <strong>Amaan Shamim Khan</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
