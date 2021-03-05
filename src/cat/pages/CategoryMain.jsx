import React from 'react'

const CategoryMain = () => (
  <div class="content-body">
      <div class="container page">
        <div class="work-filter menu-widget with-switch">
          <ul class="magic-line">
            <li class="current_item"><a href="#" data-filter="*" class="filter active">All</a></li>
            <li><a href="#" data-filter=".family" class="filter">Family</a></li>
            <li><a href="#" data-filter=".adventure" class="filter">Adventure</a></li>
            <li><a href="#" data-filter=".romantic" class="filter">Romantic</a></li>
            <li><a href="#" data-filter=".wildlife" class="filter">Wildlife</a></li>
            <li><a href="#" data-filter=".beach" class="filter">Beach</a></li>
            <li><a href="#" data-filter=".honeymoon" class="filter">Honeymoon</a></li>
          </ul>
        </div>
        <div id="filter-grid" class="row cws-multi-col masonry">
          <div class="col-md-4 col-sm-6 all adventure wildlife beach">
            <div class="portfolio-item alt text-center">
              <div class="pic"><a href="page-portfolio-single.html"><img src="pic/portfolio/370x620-1.jpg" data-at2x="pic/portfolio/370x620-1@2x.jpg" alt/></a>
                <div class="hover-effect"></div>
                <a href="page-portfolio-single.html">
                  <h3 class="portfolio-title">Vestibulum ante </h3>
                  <div class="item-content"> 
                    <p>Pellentesque habitant morbi tristique senectus et netus</p>
                  </div></a>
                <div class="links"><a href="pic/portfolio/370x620-1@2x.jpg" class="fancy"><i class="fa fa-expand"></i></a></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 all family adventure beach">
            <div class="portfolio-item alt text-center">
              <div class="pic"><a href="page-portfolio-single.html"><img src="pic/portfolio/370x310/2.jpg" data-at2x="pic/portfolio/370x310/2@2x.jpg" alt/></a>
                <div class="hover-effect"></div>
                <a href="page-portfolio-single.html">
                  <h3 class="portfolio-title">Phasellus aliquet </h3>
                  <div class="item-content"> 
                    <p>Pellentesque habitant morbi tristique senectus et netus</p>
                  </div></a>
                <div class="links"><a href="pic/portfolio/370x310/2@2x.jpg" class="fancy"><i class="fa fa-expand"></i></a></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 all family wildlife honeymoon romantic">
            <div class="portfolio-item alt text-center">
              <div class="pic"><a href="page-portfolio-single.html"><img src="pic/portfolio/370x620-3.jpg" data-at2x="pic/portfolio/370x620-3@2x.jpg" alt/></a>
                <div class="hover-effect"></div>
                <a href="page-portfolio-single.html">
                  <h3 class="portfolio-title">Pulvinar lacus</h3>
                  <div class="item-content"> 
                    <p>Pellentesque habitant morbi tristique senectus et netus</p>
                  </div></a>
                <div class="links"><a href="pic/portfolio/370x620-3@2x.jpg" class="fancy"><i class="fa fa-expand"></i></a></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 all family romantic beach honeymoon">
            <div class="portfolio-item alt text-center">
              <div class="pic"><a href="page-portfolio-single.html"><img src="pic/portfolio/370x620-2.jpg" data-at2x="pic/portfolio/370x620-2@2x.jpg" alt/></a>
                <div class="hover-effect"></div>
                  <a href="page-portfolio-single.html">
                  <h3 class="portfolio-title">Porttitor hendrerit</h3>
                  <div class="item-content"> 
                    <p>Pellentesque habitant morbi tristique senectus et netus</p>
                  </div></a>
                <div class="links"><a href="pic/portfolio/370x620-2@2x.jpg" class="fancy"><i class="fa fa-expand"></i></a></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 all romantic wildlife honeymoon">
            <div class="portfolio-item alt text-center">
              <div class="pic"><a href="page-portfolio-single.html"><img src="pic/portfolio/370x310/3.jpg" data-at2x="pic/portfolio/370x310/3@2x.jpg" alt/></a>
                <div class="hover-effect"></div>
                <a href="page-portfolio-single.html">
                  <h3 class="portfolio-title">Fusce egestas </h3>
                  <div class="item-content"> 
                    <p>Pellentesque habitant morbi tristique senectus et netus</p>
                  </div></a>
                <div class="links"><a href="pic/portfolio/370x310/3@2x.jpg" class="fancy"><i class="fa fa-expand"></i></a></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 all family wildlife honeymoon romantic">
            <div class="portfolio-item alt text-center">
              <div class="pic"><a href="page-portfolio-single.html"><img src="pic/portfolio/370x310/7.jpg" data-at2x="pic/portfolio/370x310/7@2x.jpg" alt/></a>
                <div class="hover-effect"></div>
                <a href="page-portfolio-single.html">
                  <h3 class="portfolio-title">Pulvinar lacus</h3>
                  <div class="item-content"> 
                    <p>Pellentesque habitant morbi tristique senectus et netus</p>
                  </div></a>
                <div class="links"><a href="pic/portfolio/370x310/7@2x.jpg" class="fancy"><i class="fa fa-expand"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )

  export default CategoryMain