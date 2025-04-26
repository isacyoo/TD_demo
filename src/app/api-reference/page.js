import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const APIReference = () => {
  return (
    <div>
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    </div>
  );
}

APIReference.theme = "light"

export default APIReference;
