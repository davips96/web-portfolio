import pic from "../profile-pic.png";

export default function ContactSection() {
  return (
    <div className="flex items-center h-screen px-60 py-32 bg-cobalt-800">
      <div className="flex-1 mr-16">
        <div className="text-5xl font-bold text-grey-100">Hello,</div>
        <div className="mt-4 text-lg text-justify text-grey-100">
          My name is David, I'm a full stack web developer at The Croo Group, a
          Montreal-based startup. In 2020, I completed my software engineering
          bachelor's degree from Concordia University. Front end development
          with React.js is my comfort zone, but I'm fluent in Python and Node.js
          back ends along with MySQL and GraphQL. In my career as a developer, I
          haven't had the opportunity to diversify in personal projects. This
          website is a home for my work, and will be updated as I embark on new
          projects.
        </div>
      </div>
      <img
        className="h-80 w-80 border-8 rounded-full border-clementine-300"
        src={pic}
        alt="profile pic"
      />
    </div>
  );
}
