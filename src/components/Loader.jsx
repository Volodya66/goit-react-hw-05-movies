import { RotatingLines } from  'react-loader-spinner'


export default function Loader() {


    return(
    <RotatingLines
  strokeColor="grey"
  strokeWidth="3"
  animationDuration="0.75"
  width="102"
  
  visible={true}
/>
)
}