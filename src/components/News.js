import React from 'react';

class News extends React.Component {
  render() {
    return (
      <div>
        <div class="starter-template">


          <p class="lead"></p>

          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">{this.props.tittle}</h5> <br />
              <h6>Id Noticia:{this.props.id}</h6><br />
              <strong>{this.props.about}</strong><br />

              <p class="card-text">{this.props.text}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
};

export default News;