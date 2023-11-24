import PropTypes from "prop-types";

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    FacebookShareCount,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
  } from "react-share";

import "../styles/ShareSocial.css";

export const ShareSocial = ({ shareUrl = "http://google.com" , name = "Proyecto Integrador"}) => {
    return (
        <div className="Container">
          <div className="Network">
            <FacebookShareButton
              url={shareUrl}
              className="NetworkShareButton"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
    
            <div>
              <FacebookShareCount
                url={shareUrl}
                className="NetworkShareCount"
              >
                {(count) => count}
              </FacebookShareCount>
            </div>
          </div>
    
          <div className="Network">
            <FacebookMessengerShareButton
              url={shareUrl}
              appId="521270401588372"
              className="NetworkShareButton"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
          </div>
    
          <div className="Network">
            <TwitterShareButton
              url={shareUrl}
              title={name}
              className="NetworkShareButton"
            >
              <XIcon size={32} round />
            </TwitterShareButton>
          </div>
    
          <div className="Network">
            <WhatsappShareButton
              url={shareUrl}
              title={name}
              separator=":: "
              className="NetworkShareButton"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div className="Network">
            <EmailShareButton
              url={shareUrl}
              subject={name}
              body="body"
              className="NetworkShareButton"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>
      );

};

ShareSocial.propTypes = {
    shareUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
