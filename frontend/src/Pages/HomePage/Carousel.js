import { Carousel } from 'antd';
import { contentStyle } from './Styles/CrousalStyle';
import { imgStyle } from './Styles/CrousalStyle';

export const CarouselComponent = ({ items }) => {
return(
  <Carousel style={contentStyle} autoplay>
    {
        items.map( (item, i) => 
        <div >
            <img style={imgStyle} src={item}></img>
        </div>
        )
    }
  </Carousel>
    )
}