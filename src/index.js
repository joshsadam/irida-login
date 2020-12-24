import React from "react";
import { render } from "react-dom";
import { BookOutlined, CommentOutlined, MailOutlined } from "@ant-design/icons";

function LoginPage() {
  return (
    <div className="links">
      <a
        className="shadowed"
        target="_blank"
        rel="noopener noreferrer"
        href="https://irida.corefacility.ca/documentation/user/user/"
      >
        <BookOutlined />
        IRIDA Documentation
      </a>
      <a
        className="shadowed"
        target="_blank"
        rel="noopener noreferrer"
        href="https://hub.cscscience.ca/c/irida"
      >
        <CommentOutlined />
        BioHUB
      </a>
      <a
        className="shadowed"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:helpdesk@cscscence.ca"
      >
        <MailOutlined />
        Help Desk Support
      </a>
    </div>
  );
}

render(<LoginPage />, document.querySelector("#root"));
