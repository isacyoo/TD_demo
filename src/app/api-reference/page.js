import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const APIReference = () => {
  return (
    <div>
        <SwaggerUI url="/openapi.yaml" supportedSubmitMethods={[]}/>
    </div>
  );
}

APIReference.theme = "light"

export default APIReference;
