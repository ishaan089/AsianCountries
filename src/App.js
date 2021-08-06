import React from "react";

class App extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

      super(props);

      this.state = {
          items: [],
          isLoaded: false
      }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

      fetch('https://restcountries.eu/rest/v2/region/asia')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  items: json,
              })
          }).catch((err) => {
              console.log(err);
          });

  }

  render() {

    const { items } = this.state;
    function refreshPage(){ 
        window.location.reload(); 
    }
      
      return (
            <div className="elements">
            <p className="heading">Countries In Asia.</p>
            <button type="button" class="btn btn-lg btn-outline-primary" onClick={ refreshPage }>Refresh</button>
                <div className="country container-fluid">
                {items.map(item => (
                    <div key={item.name} className="countrybox ">
                     
                    <h3>{item.name} </h3>
                    <img src={item.flag} alt={item.name} class="countryimg"></img>
                     <div className="image_overlay image_overlay--primary">
                        <div className="image_description">
                        <p>Capital : {item.capital} </p>
                        <p> Region : {item.region}</p>
                        <p>Subregion : {item.subregion}</p> 
                        <p>Language: {item.languages[0].name}</p> 
                        <p>Population: {item.population}</p>
                        <div>Borders To: {item.borders.join(', ')}</div>
                     </div>   
                    
                    </div>
                   
                  </div>
      ))}

  </div>
  </div>

      );
}
}
export default App;