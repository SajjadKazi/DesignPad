import React, {Component} from 'react';
import PadInput from './PadInput';
import PadContainer from './PadContainer.js';

class DesignContainer extends Component {
   constructor(props){
       super(props)
   }


render() {
   return (

<div>

        <PadInput/>
         <PadContainer/>
            
</div>

   );
}

}
export default DesignContainer;