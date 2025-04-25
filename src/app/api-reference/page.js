import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default function APIReference() {
  return (
    <div>
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    </div>
  );
}
