import { SecondServiceContainer } from "./SecondService.styled"

import photo from '../../../../../assets/photo/service-2.png'

export const SecondService = () => {

  return (
    <SecondServiceContainer>
      
      <div>
        <div>
          <h3>DEVELOPMENT OF A UNIQUE ERP SYSTEM</h3>

          <ul>
            <li>-Everyone Matters</li>
            <li>-Leadership is Here To Serve</li>
            <li>-Resilient</li>
          </ul>

          <button button type="button">I Want</button>
        </div>
        <img src={photo} alt="img" />
      </div>

      <p>Developing customized ERP (Enterprise Resource Planning) systems that streamline your' business operations,
        improve communication between departments and automate processes. Our ERP solutions are tailored to the
        unique needs of your business and can be integrated with other software solutions to provide a comprehensive
        business management system.
      </p>      

    </SecondServiceContainer>
  )
}