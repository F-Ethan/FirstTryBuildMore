import React, { Component } from 'react';

export class Card extends Component {
  render() {
    //sets Cards to the props passed in as Cards
    //need an array of objects that have feilds title, about, img
    //you also need to pass into props the Title
    let Cards = this.props.Cards;
    return (
      <div className='card text-center m-3 shadow p-3 mb-5 rounded'>
        <div className='card-header'>{this.props.Title}</div>
        {/* Loops through the Card Prop */}
        {Cards.map((card, index) => {
          //if index is odd puts piture second if even puts it last
          let side = index % 2 ? true : false;
          return (
            <div className='card-body ' key={index}>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12 mt-3'>
                    <div className='card border-0'>

                      <div class="card" >
                        <div class="card-body">
                          <h5 class="card-title">{card.title}</h5>
                          <p class="card-text">{card.about}.</p>
                        </div>
                        <div id={card.blogId} class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src={card.img[0]} class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                              <img src={card.img[1]} class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                              <img src={card.img[2]} class="d-block w-100" alt="..."></img>
                            </div>
                          </div>
                          <a class="carousel-control-prev" href={card.blogIdHref} role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href={card.blogIdHref} role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                      {/* <div className='card-horizontal'>
                        <div className='img-square-wrapper col-12 col-lg-3'>
                          <img
                            src={card.img}
                            className='card-img-top '
                            alt='list item'
                          ></img>
                        </div>
                        <div className='card-body'>
                          <h5 className='card-title'>{card.title}</h5>
                          <p className='card-text'>{card.about}</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
