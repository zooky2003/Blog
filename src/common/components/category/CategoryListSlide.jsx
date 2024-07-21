import Link from "next/link";
import Image from "next/image";
import { SectionTitleTwo } from "../../elements/sectionTitle/SectionTitle";
import {removeDuplicates, slugify} from '../../utils';
import Slider from "react-slick";

const CategoryListSlide = ({cateData}) => {

  const uniqueCategory = removeDuplicates(cateData, "cate");

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow next-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-right"></i>
      </button>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow prev-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-left"></i>
      </button>
    );
  }

const slideSettings = {
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	adaptiveHeight: true,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,	
        },
      },
    ],
};
    
  
};

export default CategoryListSlide;
