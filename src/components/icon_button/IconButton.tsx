
import {TouchableOpacity,Image,ImageSourcePropType} from "react-native"

interface  IconButtonProps {
iconPath :ImageSourcePropType
}

const Iconbutton = (props : IconButtonProps) => {
  return (
    <TouchableOpacity style={{marginLeft: 15}}>
      <Image
        style={{height: 20, width: 20}}
        source={props.iconPath}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

export  default Iconbutton
