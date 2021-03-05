import React from 'react'

export const ContactPage = ()=>{
    return <div className="content-body">
    <div className="container page">
      <div className="row">
        <div className="col-md-6">
          <div className="contact-item">
            <h4 className="title-section mt-30"><span className="font-bold">Contacts</span></h4>
            <div className="cws_divider mb-25 mt-5"></div>
            <ul className="icon">
              <li> <a href="#">support.suntour@example.com<i className="flaticon-suntour-email"></i></a></li>
              <li> <a href="#">(723)-700-1183<i className="flaticon-suntour-phone"></i></a></li>
              <li> <a href="#">3710 Ridge Avenue, Erie, PA 16506<i className="flaticon-suntour-map"></i></a></li>
            </ul>
            <p className="mt-20">Guests can enjoy a range of massage treatments and beauty therapy at the on-site spa, U Spa. It offers child-minding services, a currency exchange and a reception that is available 24/7. It also has superb facilities for meetings and events. </p>
            <div className="contact-cws-social"><a href="#" className="cws-social fa fa-twitter"></a><a href="#" className="cws-social fa fa-facebook"></a><a href="#" className="cws-social fa fa-google-plus"></a><a href="#" className="cws-social fa fa-linkedin"></a></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25295.930156304785!2d16.371063311644324!3d48.208404844730474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07986fcad78b%3A0x73f5a4d267cc4174!2zTmFnbGVyZ2Fzc2UgMTAsIDEwMTAgV2llbiwg0JDQstGB0YLRgNC40Y8!5e0!3m2!1sru!2sua!4v1453294615596" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </div>
    <div className="element-section pattern bg-gray-3 relative pt-60 pb-100">
      <div className="container">
        <h4 className="title-section mb-20"><span className="font-bold">Contact us</span></h4>
        <div className="widget-contact-form pb-0">
          <div className="email_server_responce"></div>
          <form action="php/contacts-process.php" method="post" className="form contact-form alt clearfix">
            <div className="row">
              <div className="col-md-6 clearfix">
                <div className="input-container">
                  <input type="text" name="name" value="" size="40" placeholder="Name" aria-invalid="false" aria-required="true" className="form-row form-row-first"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-container">
                  <input type="text" name="email" value="" size="40" placeholder="Email" aria-required="true" className="form-row form-row-last"/>
                </div>
              </div>
            </div>
            <div className="input-container">
              <textarea name="message" cols="40" rows="4" placeholder="Comment" aria-invalid="false" aria-required="true"></textarea>
            </div>
            <input type="submit" value="Submit now" className="cws-button alt"/>
          </form>
        </div>
      </div>
    </div>
  </div>
}