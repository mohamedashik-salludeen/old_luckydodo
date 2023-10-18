import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-section d-none">
      <div className="container pt-120">
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <div className="left">
                <p>
                  {" "}
                  Copyright © <Link href="index">Lucky Dodo</Link> | Designed by{" "}
                  
                </p>
              </div>
              <div className="right">
                <Link href="/privacy-policy" className="cus-bor">
                  Privacy{" "}
                </Link>
                <Link href="terms-conditions">Terms &amp; Condition </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
