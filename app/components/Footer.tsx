// components/Footer.tsx

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        bg-black
        text-gray-400
        px-6
        md:px-16
        py-10
        mt-20
      "
    >
      {/* 👉 CONTAINER */}
      <div className="max-w-5xl mx-auto">
        {/* 👉 SOCIAL ICONS */}
        <div className="flex items-center gap-5 text-2xl mb-8">
          <FaFacebook
            className="
              cursor-pointer
              hover:text-white
              transition
            "
          />

          <FaInstagram
            className="
              cursor-pointer
              hover:text-white
              transition
            "
          />

          <FaTwitter
            className="
              cursor-pointer
              hover:text-white
              transition
            "
          />

          <FaYoutube
            className="
              cursor-pointer
              hover:text-white
              transition
            "
          />
        </div>

        {/* 👉 FOOTER LINKS */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            text-sm
          "
        >
          <p className="hover:underline cursor-pointer">Audio and Subtitles</p>

          <p className="hover:underline cursor-pointer">Media Center</p>

          <p className="hover:underline cursor-pointer">Privacy</p>

          <p className="hover:underline cursor-pointer">Contact Us</p>

          <p className="hover:underline cursor-pointer">Help Center</p>

          <p className="hover:underline cursor-pointer">Jobs</p>

          <p className="hover:underline cursor-pointer">Cookie Preferences</p>

          <p className="hover:underline cursor-pointer">Legal Notices</p>
        </div>

        {/* 👉 COPYRIGHT */}
        <p
          className="
            text-xs
            text-gray-500
            mt-10
          "
        >
          © <span>{new Date().getFullYear()}</span> Neftlix Clone by Amit Maurya
        </p>
      </div>
    </footer>
  );
};

export default Footer;
