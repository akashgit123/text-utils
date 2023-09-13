
export default function Aboutus() {
  return (
    <>
      <div className="container my-5" >
        <h1>About-Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample" >
          <div className="accordion-item" >
            <h2 className="accordion-header" id="panelsStayOpen-headingOne" >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                
              >
                Input
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
              
            >
              <div className="accordion-body" >
                <strong>To allow user to write the text and perform certain factions on it</strong> 
              </div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo" >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                
              >
                Functions
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
              
            >
              <div className="accordion-body" >
                <strong>
                  Upper case 
                  Lower case
                  Copy text
                  Clear text 
                  Count number of words , characters and preview of the text content
                  </strong> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
