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

export const ShareSocial = ({ shareUrl, name }) => {
    return (
        <div className="container">
          <div>
            <FacebookShareButton
              url={shareUrl}
              className="networkShareButton"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
    
            <div>
              <FacebookShareCount
                url={shareUrl}
                className="networkShareButton"
              >
                {(count) => count}
              </FacebookShareCount>
            </div>
          </div>
    
          <div>
            <FacebookMessengerShareButton
              url={shareUrl}
              appId="521270401588372"
              className="networkShareButton"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
          </div>
    
          <div>
            <TwitterShareButton
              url={shareUrl}
              title={name}
              className="networkShareButton"
            >
              <XIcon size={32} round />
            </TwitterShareButton>
          </div>
    
          <div>
            <WhatsappShareButton
              url={shareUrl}
              title={name}
              separator=":: "
              className="networkShareButton"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div>
            <EmailShareButton
              url={shareUrl}
              subject={name}
              body="body"
              className="networkShareButton"
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
